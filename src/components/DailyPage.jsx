import { ChevronDown, Package, Wrench } from "lucide-react";
import { ContactSection } from "@/components/ContactSection";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";

export function DailyPage() {
  const { t } = useLang(),
    e = t.daily,
    r = useReveal(),
    n = useReveal(0.05),
    s = useReveal(0.1),
    i = useReveal(),
    o = useReveal(0.05),
    a = (Cmp_l) => {
      const u = document.querySelector(Cmp_l);
      u &&
        u.scrollIntoView({
          behavior: "smooth",
        });
    };
  return (
    <div>
      <section
        id="diario-inicio"
        className="relative min-h-[88svh] sm:min-h-[100svh] flex flex-col text-center overflow-hidden parallax-bg"
        style={{
          backgroundImage: "url('/bg-daily-hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, var(--hero-overlay-from), var(--hero-overlay-via), var(--hero-overlay-to))",
            transition: "background 0.3s ease",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1 z-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, #d4aa30, transparent)",
          }}
        />
        <div className="relative z-20 flex-1 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-4">
            <div className="mb-4 sm:mb-8">
              <div
                className="inline-block p-3 rounded-2xl"
                style={{
                  background: "rgba(212,170,48,0.08)",
                  border: "2px solid rgba(212,170,48,0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <img
                  src="/logo-rf.png"
                  alt="RF Soluções"
                  className="h-24 sm:h-52 md:h-60 w-auto mx-auto drop-shadow-2xl"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
            <div className="mb-4">
              <span
                className="inline-block px-5 py-1.5 text-xs sm:text-sm font-semibold tracking-widest uppercase border rounded-full"
                style={{
                  borderColor: "#d4aa30",
                  color: "#d4aa30",
                  background: "rgba(212,170,48,0.08)",
                }}
              >
                {e.heroTag}
              </span>
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#ffffff",
              }}
            >
              {e.heroTitle1}{" "}
              <span
                style={{
                  color: "#f0c040",
                }}
              >
                {e.heroTitle2}
              </span>
            </h1>
            <p
              className="text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {e.heroSubtitle}
            </p>
          </div>
        </div>
        <div className="relative z-20 flex justify-center pb-6 pt-2">
          <button
            onClick={() => a("#diario-servicos")}
            className="hover:text-[#f0c040] transition-colors animate-bounce"
            style={{
              color: "rgba(255,255,255,0.6)",
            }}
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>
      <section
        id="diario-sobre"
        className="relative py-10 sm:py-20 section-bg-overlay parallax-bg"
        style={{
          backgroundImage: "url('/sobrenos.webp')",
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
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#d4aa30" }}
          >
            {e.aboutTag}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "var(--text-primary)",
            }}
          >
            {e.aboutTitle1}{" "}
            <span style={{ color: "#f0c040" }}>{e.aboutTitle2}</span>
          </h2>
          <div className="gold-divider mx-auto mt-4" />
          <p
            className="mt-6 text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {e.aboutP1}
          </p>
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {e.aboutP2}
          </p>
        </div>
      </section>
      <section
        id="diario-servicos"
        className="relative py-12 sm:py-24 section-bg-overlay parallax-bg"
        style={{
          backgroundImage: "url('/bg-daily-svc.webp')",
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
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={r.ref}
            className={`text-center mb-10 sm:mb-14 reveal ${r.isVisible ? "in-view" : ""}`}
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{
                color: "#d4aa30",
              }}
            >
              {e.servicesTag}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {e.servicesTitle1}{" "}
              <span
                style={{
                  color: "#f0c040",
                }}
              >
                {e.servicesTitle2}
              </span>
            </h2>
            <div className="gold-divider mx-auto mt-4" />
            <p
              className="mt-4 max-w-2xl mx-auto text-sm sm:text-base"
              style={{
                color: "var(--text-muted)",
              }}
            >
              {e.servicesSubtitle}
            </p>
          </div>
          <div
            ref={n.ref}
            className={`grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 stagger-children ${n.isVisible ? "in-view" : ""}`}
          >
            {e.list.map(({ title: Cmp_l, desc: u }, d) => (
              <div
                className="p-4 sm:p-6 rounded-xl border card-hover"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--card-border)",
                }}
                key={d}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div
                    className="p-2.5 sm:p-3 rounded-full"
                    style={{
                      background: "rgba(212,170,48,0.1)",
                    }}
                  >
                    <Wrench
                      size={24}
                      style={{
                        color: "#f0c040",
                      }}
                    />
                  </div>
                </div>
                <h3
                  className="font-bold text-sm leading-tight mb-3 text-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "var(--text-primary)",
                  }}
                >
                  {Cmp_l}
                </h3>
                <p
                  className="text-xs leading-relaxed text-center"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  {u}
                </p>
              </div>
            ))}
          </div>
          <div
            ref={s.ref}
            className={`mt-12 text-center reveal-scale ${s.isVisible ? "in-view" : ""}`}
          >
            <div
              className="inline-block p-5 sm:p-6 rounded-2xl border"
              style={{
                background: "var(--bg-card)",
                borderColor: "rgba(212,170,48,0.4)",
              }}
            >
              <p
                className="text-lg font-bold mb-2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "#f0c040",
                }}
              >
                {e.feeNote}
              </p>
              <p
                className="text-sm max-w-md"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                {e.feeHint}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="diario-materiais"
        className="relative py-12 sm:py-24 section-bg-overlay parallax-bg"
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
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={i.ref}
            className={`text-center mb-10 sm:mb-14 reveal ${i.isVisible ? "in-view" : ""}`}
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{
                color: "#d4aa30",
              }}
            >
              {e.materialsTitle}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-primary)",
              }}
            >
              <span
                style={{
                  color: "#f0c040",
                }}
              >
                {e.materialsTitle}
              </span>
            </h2>
            <div className="gold-divider mx-auto mt-4" />
            <p
              className="mt-4 max-w-2xl mx-auto text-sm sm:text-base"
              style={{
                color: "var(--text-muted)",
              }}
            >
              {e.materialsSubtitle}
            </p>
          </div>
          <div
            ref={o.ref}
            className={`grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 stagger-children ${o.isVisible ? "in-view" : ""}`}
          >
            {e.materials.map(({ title: Cmp_l, desc: u }, d) => (
              <div
                className="p-4 sm:p-6 rounded-xl border card-hover"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--card-border)",
                }}
                key={d}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div
                    className="p-2.5 sm:p-3 rounded-full"
                    style={{
                      background: "rgba(212,170,48,0.1)",
                    }}
                  >
                    <Package
                      size={24}
                      style={{
                        color: "#f0c040",
                      }}
                    />
                  </div>
                </div>
                <h3
                  className="font-bold text-sm leading-tight mb-3 text-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "var(--text-primary)",
                  }}
                >
                  {Cmp_l}
                </h3>
                <p
                  className="text-xs leading-relaxed text-center"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  {u}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection sectionId="diario-contato" />
    </div>
  );
}
