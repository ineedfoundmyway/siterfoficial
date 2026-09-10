import React from "react";
import { CheckCircle, Mail, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { sendContactEmail } from "@/lib/contact.functions";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";

const EMPTY_FORM = {
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    termsAccepted: false,
};
export function ContactSection({ sectionId: t = "contato" }) {
  const { t: e } = useLang(),
    r = e.contact,
    [n, s] = React.useState(EMPTY_FORM),
    [i, o] = React.useState(!1),
    [a, Cmp_l] = React.useState(!1),
    [emailSent, setEmailSent] = React.useState(!0),
    [u, d] = React.useState(""),
    Cmp_h = useReveal(),
    f = useReveal(0.05),
    v = (x, j) => {
      (s((g) => ({
        ...g,
        [x]: j,
      })),
        d(""));
    },
    y = async (x) => {
      if ((x.preventDefault(), !n.termsAccepted)) {
        d(r.formTermsError);
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(n.email.trim())) {
        d(r.formEmailError || "Informe um e-mail válido.");
        return;
      }
      (o(!0), d(""));
      const { error: j } = await supabase.from("contact_requests").insert({
        name: n.name.trim(),
        email: n.email.trim(),
        phone: n.phone.trim(),
        company: n.company.trim(),
        message: n.message.trim(),
        terms_accepted: n.termsAccepted,
      });
      if (j) {
        (console.error("contact request failed", j), d(r.formError), o(!1));
        return;
      }
      const payload = {
        name: n.name.trim(),
        email: n.email.trim(),
        phone: n.phone.trim(),
        company: n.company.trim(),
        message: n.message.trim(),
        origin: t,
      };
      let sentOk = !1;
      try {
        const emailResult = await sendContactEmail({ data: payload });
        sentOk = emailResult?.sent === !0;
      } catch (err) {
        console.error("contact email failed", err);
      }
      if (!sentOk) {
        // Fallback para o deploy estático na Netlify (server function não existe lá).
        try {
          const r = await fetch("/.netlify/functions/send-contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const j = await r.json().catch(() => null);
          sentOk = r.ok && j?.sent === !0;
        } catch (err) {
          console.error("netlify contact email failed", err);
        }
      }
      setEmailSent(sentOk);
      (s(EMPTY_FORM), Cmp_l(!0), o(!1));
    };
  return (
    <section
      id={t}
      className="relative py-24 section-bg-overlay parallax-bg"
      style={{
        backgroundImage: "url('/bg-contact.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 z-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, #d4aa30, transparent)",
        }}
      />
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={Cmp_h.ref}
          className={`text-center mb-12 reveal ${Cmp_h.isVisible ? "in-view" : ""}`}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-2"
            style={{
              color: "#d4aa30",
            }}
          >
            {r.tag}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "var(--text-primary)",
            }}
          >
            {r.title1}{" "}
            <span
              style={{
                color: "#f0c040",
              }}
            >
              {r.title2}
            </span>
          </h2>
          <div className="gold-divider mx-auto mt-4" />
          <p
            className="mt-4 max-w-xl mx-auto text-sm sm:text-base"
            style={{
              color: "var(--text-muted)",
            }}
          >
            {r.subtitle}
          </p>
        </div>
        <div
          ref={f.ref}
          className={`reveal-scale ${f.isVisible ? "in-view" : ""} grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:items-start`}
        >
          <form
            onSubmit={y}
            className="p-6 sm:p-9 rounded-2xl border"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--card-border)",
            }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="contact-label">
                  {r.formName}
                  {" *"}
                </span>
                <input
                  required={!0}
                  minLength={2}
                  maxLength={120}
                  placeholder="Seu nome"
                  value={n.name}
                  onChange={(x) => v("name", x.target.value)}
                  className="contact-input"
                />
              </label>
              <label className="block">
                <span className="contact-label">
                  {r.formEmail}
                  {" *"}
                </span>
                <input
                  required={!0}
                  type="email"
                  maxLength={320}
                  placeholder="voce@empresa.com"
                  value={n.email}
                  onChange={(x) => v("email", x.target.value)}
                  className="contact-input"
                />
              </label>
              <label className="block">
                <span className="contact-label">
                  {r.formPhone}
                  {" *"}
                </span>
                <input
                  required={!0}
                  type="tel"
                  minLength={7}
                  maxLength={30}
                  placeholder="(21) 99999-0000"
                  value={n.phone}
                  onChange={(x) => v("phone", x.target.value)}
                  className="contact-input"
                />
              </label>
              <label className="block">
                <span className="contact-label">{r.formCompany}</span>
                <input
                  maxLength={160}
                  placeholder="Nome da empresa ou condomínio"
                  value={n.company}
                  onChange={(x) => v("company", x.target.value)}
                  className="contact-input"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="contact-label">
                  {r.formMessage}
                  {" *"}
                </span>
                <textarea
                  required={!0}
                  minLength={10}
                  maxLength={4e3}
                  rows={5}
                  placeholder="Conte o tipo de local, a necessidade e o objetivo da operação."
                  value={n.message}
                  onChange={(x) => v("message", x.target.value)}
                  className="contact-input resize-y"
                />
              </label>
            </div>
            <label className="flex items-start gap-3 mt-6 cursor-pointer">
              <input
                type="checkbox"
                checked={n.termsAccepted}
                onChange={(x) => v("termsAccepted", x.target.checked)}
                className="mt-1 accent-[#d4aa30]"
              />
              <span
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                {r.formTerms}
                {" *"}
              </span>
            </label>
            {u && (
              <p
                className="mt-4 text-sm font-semibold"
                style={{
                  color: "#fca5a5",
                }}
              >
                {u}
              </p>
            )}
            {a && (
              <div
                className="mt-6 flex flex-col sm:flex-row items-center gap-4 p-5 rounded-xl text-center sm:text-left"
                style={{
                  background: "rgba(212,170,48,0.07)",
                  border: "1px solid rgba(212,170,48,0.35)",
                }}
              >
                <img
                  src="/logo-rf.png"
                  alt="RF Soluções"
                  className="h-14 w-auto shrink-0"
                  loading="lazy"
                  decoding="async"
                />
                <div className="min-w-0">
                  <p
                    className="flex items-center justify-center sm:justify-start gap-2 text-sm font-bold"
                    style={{
                      color: "#f0c040",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    <CheckCircle size={18} className="shrink-0" />
                    {"Dados enviados com sucesso!"}
                  </p>
                  <p
                    className="mt-1 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {"Recebemos suas informações. Nossa equipe entrará em contato em breve."}
                  </p>
                  {!emailSent && (
                    <p className="mt-2 text-xs" style={{ color: "#fcd34d" }}>
                      {r.formEmailWarning}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-start gap-4">
              <button
                type="submit"
                disabled={i}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-[#050d1a] transition-all duration-200 hover:brightness-110 active:scale-95 disabled:opacity-60 disabled:cursor-wait"
                style={{
                  background: "linear-gradient(135deg, #d4aa30, #f0c040)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {i ? r.formSending : r.formButton}
                <ArrowRight size={17} />
              </button>
            </div>
          </form>

          <aside
            className="p-6 sm:p-7 rounded-2xl border"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--card-border)",
            }}
          >
            <div className="flex items-start gap-3 mb-6">
              <div className="p-2.5 rounded-xl" style={{ background: "rgba(212,170,48,0.12)" }}>
                <Mail size={20} style={{ color: "#f0c040" }} />
              </div>
              <div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "var(--text-primary)" }}
                >
                  {r.formTitle}
                </h3>
                <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                  {r.formSubtitle}
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              <li>
                <a href="tel:+5521997931473" className="contact-info-link">
                  <Phone size={17} className="shrink-0" style={{ color: "#f0c040" }} />
                  {"(21) 99793-1473"}
                </a>
              </li>
              <li>
                <a href="mailto:suportetec@offshore.com" className="contact-info-link break-all">
                  <Mail size={17} className="shrink-0" style={{ color: "#f0c040" }} />
                  {"suportetec@offshore.com"}
                </a>
              </li>
              <li>
                <button type="button" onClick={() => openWhatsapp()} className="contact-info-link">
                  <MessageCircle size={17} className="shrink-0" style={{ color: "#f0c040" }} />
                  {"Falar no WhatsApp"}
                </button>
              </li>
              <li>
                <span
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  <MapPin size={17} className="shrink-0" style={{ color: "#f0c040" }} />
                  {"Sede no Rio de Janeiro."}
                </span>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/rfsolu%C3%A7oes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-link"
                >
                  <Linkedin size={17} className="shrink-0" style={{ color: "#f0c040" }} />
                  {"LinkedIn"}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/electralrf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-link"
                >
                  <Instagram size={17} className="shrink-0" style={{ color: "#f0c040" }} />
                  {"Instagram"}
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
