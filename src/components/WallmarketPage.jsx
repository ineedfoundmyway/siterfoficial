import { ArrowDown, ArrowRight, Building2, CheckCircle, ClipboardCheck, Mail, MessageCircle, Settings, Store } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";

export function WallmarketPage() {
  const { t } = useLang();
  const content = t.wallmarket;
  const intro = useReveal();
  const roles = useReveal(0.08);
  const models = useReveal(0.08);

  const scrollToAbout = () => {
    document.getElementById("wallmarket-sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section
        id="wallmarket-inicio"
        className="wallmarket-hero relative min-h-[100svh] overflow-hidden"
      >
        <div className="wallmarket-grid absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-8 px-4 pb-24 pt-24 sm:px-6 sm:pt-28 lg:grid-cols-[minmax(0,1fr)_minmax(380px,.9fr)] lg:gap-14 lg:px-8">
          <div className="min-w-0 text-left">
            <a href="https://rfwallmarket.com/" target="_blank" rel="noopener noreferrer" className="inline-flex" aria-label="Acessar o site oficial da RF Wallmarket">
              <img src="/logo-rf-wallmarket-transparent.webp" alt="RF Wallmarket" className="h-auto w-52 object-contain sm:w-64" loading="eager" decoding="async" />
            </a>
            <h1 className="mt-7 max-w-3xl text-3xl font-bold uppercase leading-[1.04] sm:text-5xl lg:text-6xl">
              <span className="text-gold">{content.heroTitleGold}</span>{" "}
              <span style={{ color: "var(--text-primary)" }}>{content.heroTitle}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed sm:text-base" style={{ color: "var(--text-secondary)" }}>{content.heroText}</p>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed" style={{ color: "var(--text-primary)" }}>{content.heroTextStrong}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="https://rfwallmarket.com/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-gold px-5 text-center text-xs font-bold uppercase" style={{ color: "var(--navy-950)" }}>
                {content.heroCta}<ArrowRight size={16} />
              </a>
              <button type="button" onClick={scrollToAbout} className="inline-flex min-h-12 items-center justify-center rounded-md border border-gold px-5 text-xs font-bold uppercase text-gold">
                {content.heroSecondary}
              </button>
            </div>
            <div className="mt-5 flex flex-col gap-2 text-xs sm:flex-row sm:flex-wrap sm:gap-5" style={{ color: "var(--text-muted)" }}>
              <a href="mailto:comercial@rfwallmarket.com" className="inline-flex items-center gap-2 hover:text-gold"><Mail size={14} />comercial@rfwallmarket.com</a>
              <a href="https://wa.me/5521997931473" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-gold"><MessageCircle size={14} />{content.heroWhatsapp}</a>
            </div>
          </div>
          <div className="relative min-w-0">
            <div className="overflow-hidden rounded-lg border border-gold/30 bg-card shadow-2xl">
              <img src="/tech/wallmarket-sim.webp" alt="Simulação de uma unidade RF Wallmarket 24h com checkout e expositores" className="aspect-video w-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={scrollToAbout}
          className="absolute bottom-5 left-1/2 z-20 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-gold text-gold animate-bounce"
          aria-label={content.scrollLabel}
        >
          <ArrowDown size={22} />
        </button>
      </section>

       <section id="wallmarket-sobre" className="relative py-16 sm:py-24" style={{ background: "var(--bg-base)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={intro.ref} className={`mx-auto max-w-4xl text-center reveal ${intro.isVisible ? "in-view" : ""}`}>
            <p className="text-xs font-bold uppercase tracking-widest text-gold">{content.aboutTag}</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>
              {content.aboutTitle}
            </h2>
            <div className="gold-divider mx-auto mt-4" />
            <p className="mt-6 text-base leading-relaxed sm:text-lg" style={{ color: "var(--text-secondary)" }}>
              {content.aboutText}
            </p>
          </div>

          <div ref={roles.ref} className={`mt-12 grid gap-5 lg:grid-cols-2 stagger-children ${roles.isVisible ? "in-view" : ""}`}>
            {content.companies.map((company, index) => {
              const Icon = index === 0 ? Store : Settings;
              return (
                <article key={company.title} className="rounded-lg border p-6 sm:p-8" style={{ background: "var(--bg-card)", borderColor: "var(--card-border)" }}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-soft text-gold"><Icon size={21} /></span>
                    <h3 className="text-xl font-bold text-gold">{company.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{company.summary}</p>
                  <ul className="mt-5 space-y-3">
                    {company.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                        <CheckCircle className="mt-0.5 shrink-0 text-gold" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="wallmarket-operacao" className="relative py-16 sm:py-24" style={{ background: "var(--bg-surface)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">{content.operationTag}</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>{content.operationTitle}</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[ClipboardCheck, Building2, Store].map((Icon, index) => (
              <article key={content.steps[index].title} className="rounded-lg border p-6" style={{ background: "var(--bg-card)", borderColor: "var(--card-border)" }}>
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-soft text-gold"><Icon size={20} /></span>
                <p className="mt-5 text-xs font-bold uppercase tracking-widest text-gold">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-bold" style={{ color: "var(--text-primary)" }}>{content.steps[index].title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{content.steps[index].desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="wallmarket-modelos" className="py-16 sm:py-24" style={{ background: "var(--bg-base)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={models.ref} className={`grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] reveal ${models.isVisible ? "in-view" : ""}`}>
            <div className="overflow-hidden rounded-lg border" style={{ borderColor: "var(--card-border)", background: "var(--bg-card)" }}>
              <img src="/tech/wallmarket-24h-loja.webp" alt="Loja autônoma RF Wallmarket 24h completa" className="aspect-[4/3] w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gold">{content.modelsTag}</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl" style={{ color: "var(--text-primary)" }}>{content.modelsTitle}</h2>
              <p className="mt-5 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{content.modelsText}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {content.models.map((model) => (
                  <div key={model.title} className="rounded-lg border p-4" style={{ background: "var(--bg-card)", borderColor: "var(--card-border)" }}>
                    <h3 className="font-bold text-gold">{model.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{model.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}