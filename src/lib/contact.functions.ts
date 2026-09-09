import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const CONTACT_TO = "suportetec@rf-offshore.com";
const CONTACT_FROM = "RF Soluções <contato@mail.rf-offshore.com>";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(320),
  phone: z.string().trim().min(7).max(30),
  company: z.string().trim().max(160).optional().default(""),
  message: z.string().trim().min(10).max(4000),
  origin: z.string().trim().max(60).optional().default("site"),
});

const esc = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br />");

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => {
    const parsed = schema.safeParse(input);
    return parsed.success
      ? { ok: true as const, value: parsed.data }
      : { ok: false as const, value: null };
  })
  .handler(async ({ data: parsed }) => {
    if (!parsed.ok || !parsed.value) {
      return { sent: false as const, reason: "invalid" as const };
    }
    const data = parsed.value;
    const apiKey = process.env["RESEND_API_KEY1"] || process.env["RESEND_API_KEY"];
    if (!apiKey) {
      console.error("RESEND_API_KEY1 não configurada");
      return { sent: false as const };
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
      const body = await response.text();
      console.error(`Resend falhou [${response.status}]: ${body}`);
      return { sent: false as const };
    }

    return { sent: true as const };
  });
