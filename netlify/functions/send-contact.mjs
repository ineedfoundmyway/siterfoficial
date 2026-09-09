// Netlify Function: envia o e-mail do formulário de contato via Resend.
// Roda apenas no deploy da Netlify (site estático); dentro da Lovable o
// envio é feito pela server function (src/lib/contact.functions.ts).

const CONTACT_TO = "suportetec@rf-offshore.com";
const CONTACT_FROM = "RF Soluções <contato@mail.rf-offshore.com>";

const esc = (v) =>
  String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br />");

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

export default async (req) => {
  if (req.method !== "POST") {
    return Response.json({ sent: false, reason: "method" }, { status: 405 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ sent: false, reason: "invalid" }, { status: 400 });
  }

  const data = {
    name: String(body?.name ?? "").trim(),
    email: String(body?.email ?? "").trim(),
    phone: String(body?.phone ?? "").trim(),
    company: String(body?.company ?? "").trim(),
    message: String(body?.message ?? "").trim(),
    origin: String(body?.origin ?? "site").trim().slice(0, 60),
  };

  if (
    data.name.length < 2 || data.name.length > 120 ||
    !isEmail(data.email) || data.email.length > 320 ||
    data.phone.length < 7 || data.phone.length > 30 ||
    data.company.length > 160 ||
    data.message.length < 10 || data.message.length > 4000
  ) {
    return Response.json({ sent: false, reason: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY1 || process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY1 não configurada");
    return Response.json({ sent: false, reason: "not_configured" }, { status: 500 });
  }

  const html = `
    <h2>Novo contato pelo site — ${esc(data.name)}</h2>
    <p><strong>Origem:</strong> ${esc(data.origin)}</p>
    <p><strong>Nome:</strong> ${esc(data.name)}</p>
    <p><strong>E-mail:</strong> ${esc(data.email)}</p>
    <p><strong>WhatsApp:</strong> ${esc(data.phone)}</p>
    <p><strong>Empresa:</strong> ${esc(data.company || "Não informado")}</p>
    <p><strong>Mensagem:</strong><br />${esc(data.message)}</p>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: data.email,
      subject: `Novo contato pelo site — ${data.name}`,
      html,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error(`Resend falhou [${response.status}]: ${text}`);
    return Response.json({ sent: false, reason: "resend_error" }, { status: 502 });
  }

  return Response.json({ sent: true });
};
