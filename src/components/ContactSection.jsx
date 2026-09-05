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
      let sentOk = !1;
      try {
        const emailResult = await sendContactEmail({
          data: {
            name: n.name.trim(),
            email: n.email.trim(),
            phone: n.phone.trim(),
            company: n.company.trim(),
            message: n.message.trim(),
            origin: t,
          },
        });
        sentOk = emailResult?.sent === !0;
      } catch (err) {
        console.error("contact email failed", err);
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
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className={`reveal-scale ${f.isVisible ? "in-view" : ""}`}
        >
          <form
            onSubmit={y}
            className="p-6 sm:p-9 rounded-2xl border"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--card-border)",
            }}
          >
            <div className="flex items-start gap-4 mb-8">
              <div
                className="p-3 rounded-xl"
                style={{
                  background: "rgba(212,170,48,0.12)",
                }}
              >
                <Mail
                  size={24}
                  style={{
                    color: "#f0c040",
                  }}
                />
              </div>
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "var(--text-primary)",
                  }}
                >
                  {r.formTitle}
                </h3>
                <p
                  className="text-sm mt-1"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  {r.formSubtitle}
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span
                  className="block text-sm font-semibold mb-2"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {r.formName}
                  {" *"}
                </span>
                <input
                  required={!0}
                  minLength={2}
                  maxLength={120}
                  value={n.name}
                  onChange={(x) => v("name", x.target.value)}
                  className="contact-input"
                />
              </label>
              <label className="block">
                <span
                  className="block text-sm font-semibold mb-2"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {r.formEmail}
                  {" *"}
                </span>
                <input
                  required={!0}
                  type="email"
                  maxLength={320}
                  value={n.email}
                  onChange={(x) => v("email", x.target.value)}
                  className="contact-input"
                />
              </label>
              <label className="block">
                <span
                  className="block text-sm font-semibold mb-2"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {r.formPhone}
                  {" *"}
                </span>
                <input
                  required={!0}
                  type="tel"
                  minLength={7}
                  maxLength={30}
                  value={n.phone}
                  onChange={(x) => v("phone", x.target.value)}
                  className="contact-input"
                />
              </label>
              <label className="block">
                <span
                  className="block text-sm font-semibold mb-2"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {r.formCompany}
                </span>
                <input
                  maxLength={160}
                  value={n.company}
                  onChange={(x) => v("company", x.target.value)}
                  className="contact-input"
                />
              </label>
              <label className="block sm:col-span-2">
                <span
                  className="block text-sm font-semibold mb-2"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {r.formMessage}
                  {" *"}
                </span>
                <textarea
                  required={!0}
                  minLength={10}
                  maxLength={4e3}
                  rows={5}
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
                className={`mt-5 flex items-start gap-2 text-sm ${emailSent ? "" : "p-3 rounded-lg"}`}
                style={{
                  color: emailSent ? "#86efac" : "#fcd34d",
                  background: emailSent ? "transparent" : "rgba(252,211,77,0.08)",
                  border: emailSent ? "none" : "1px solid rgba(252,211,77,0.25)",
                }}
              >
                <CheckCircle size={18} className="mt-0.5 shrink-0" />
                <span>{emailSent ? r.formSuccess : r.formEmailWarning}</span>
              </div>
            )}
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-end gap-4">

              <button
                type="submit"
                disabled={i}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-bold text-[#050d1a] transition-all duration-200 hover:brightness-110 active:scale-95 disabled:opacity-60 disabled:cursor-wait"
                style={{
                  background: "linear-gradient(135deg, #d4aa30, #f0c040)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <Send size={17} />
                {i ? r.formSending : r.formButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
