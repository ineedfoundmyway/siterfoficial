import { Award, ChevronDown, Cpu, Factory, FileCheck, Home, Network, Phone, Shield, Wind } from "lucide-react";
import { ContactSection } from "@/components/ContactSection";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";

export const predialIcons = [Home, Factory, Wind, Cpu, Shield, FileCheck, Network],
  a0 = [
    "/svc-predial-1.webp",
    "/svc-predial-2.webp",
    "/svc-predial-3.webp",
    "/svc-predial-4.webp",
    "/svc-predial-5.webp",
    "/svc-predial-6.webp",
    "/svc-predial-7.webp",
  ];
export function PredialPage({ onNavigateOffshore: t }) {
  const { t: e } = useLang(),
    r = e.predial,
    n = useReveal(),
    s = useReveal(0.08),
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
        id="predial-inicio"
        className="relative min-h-[100svh] flex flex-col text-center overflow-hidden parallax-bg"
        style={{
          backgroundImage: "url('/bg-predial-hero.webp')",
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
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-4">
            <div className="mb-8">
              <div
                className="inline-block p-3 rounded-2xl"
                style={{
                  background: "rgba(212,170,48,0.08)",
                  border: "2px solid rgba(212,170,48,0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <img
                  src="/logo-rf.svg"
                  alt="RF Soluções"
                  className="h-40 sm:h-52 md:h-60 w-auto mx-auto drop-shadow-2xl"
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
                {r.heroTag}
              </span>
            </div>
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#ffffff",
              }}
            >
              {r.heroTitle1}{" "}
              <span
                style={{
                  color: "#f0c040",
                }}
              >
                {r.heroTitle2}
                <br />
                {r.heroTitle3}
              </span>
            </h1>
            <p
              className="text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.85)",
              }}
            >
              {r.heroSubtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {[Shield, Award, Phone].map((Cmp_l, u) => (
                <div
                  className="flex items-center gap-2 text-sm sm:text-base"
                  style={{
                    color: "rgba(255,255,255,0.9)",
                  }}
                  key={u}
                >
                  <Cmp_l
                    size={18}
                    style={{
                      color: "#f0c040",
                    }}
                  />
                  <span>
                    {[e.hero.badge1, e.hero.badge2, e.hero.badge3][u]}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8" />
          </div>
        </div>
        <div className="relative z-20 flex justify-center pb-6 pt-2">
          <button
            onClick={() => a("#predial-servicos")}
            className="hover:text-[#f0c040] transition-colors animate-bounce"
            style={{
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>
      <section
        id="predial-sobre"
        className="relative py-24 section-bg-overlay parallax-bg"
        style={{
          backgroundImage: "url('/bg-predial-about.webp')",
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
            ref={n.ref}
            className={`text-center mb-12 reveal ${n.isVisible ? "in-view" : ""}`}
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{
                color: "#d4aa30",
              }}
            >
              {r.aboutTag}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {r.aboutTitle1}{" "}
              <span
                style={{
                  color: "#f0c040",
                }}
              >
                {r.aboutTitle2}
              </span>
            </h2>
            <div className="gold-divider mx-auto mt-4" />
          </div>
          <div ref={s.ref} className="grid lg:grid-cols-2 gap-10 items-center">
            <div
              className={`space-y-5 reveal-left ${s.isVisible ? "in-view" : ""}`}
            >
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "var(--text-secondary)",
                }}
              >
                {r.aboutP1}
              </p>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                {r.aboutP2}
              </p>
            </div>
            <div
              className={`grid grid-cols-2 gap-4 stagger-children ${s.isVisible ? "in-view" : ""}`}
            >
              {[
                {
                  icon: Home,
                  label: "Residencial",
                },
                {
                  icon: Factory,
                  label: "Industrial",
                },
                {
                  icon: Shield,
                  label: "Predial",
                },
                {
                  icon: Wind,
                  label: "Refrigeração",
                },
              ].map(({ icon: Cmp_l, label: u }) => (
                <div
                  className="p-5 rounded-xl border card-hover text-center"
                  style={{
                    background: "var(--bg-card)",
                    borderColor: "var(--card-border)",
                  }}
                  key={u}
                >
                  <div className="flex justify-center mb-3">
                    <div
                      className="p-3 rounded-full"
                      style={{
                        background: "rgba(212,170,48,0.1)",
                      }}
                    >
                      <Cmp_l
                        size={24}
                        style={{
                          color: "#f0c040",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="font-semibold text-sm"
                    style={{
                      color: "var(--text-primary)",
                    }}
                  >
                    {u}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="predial-servicos"
        className="relative py-24 section-bg-overlay parallax-bg"
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
            ref={i.ref}
            className={`text-center mb-14 reveal ${i.isVisible ? "in-view" : ""}`}
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-2"
              style={{
                color: "#d4aa30",
              }}
            >
              {r.servicesTag}
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {r.servicesTitle1}{" "}
              <span
                style={{
                  color: "#f0c040",
                }}
              >
                {r.servicesTitle2}
              </span>
            </h2>
            <div className="gold-divider mx-auto mt-4" />
            <p
              className="mt-4 max-w-2xl mx-auto text-sm sm:text-base"
              style={{
                color: "var(--text-muted)",
              }}
            >
              {r.servicesSubtitle}
            </p>
          </div>
          <div
            ref={o.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${o.isVisible ? "in-view" : ""}`}
          >
            {r.serviceList.map(({ title: Cmp_l, desc: u }, d) => {
              const Cmp_h = predialIcons[d];
              return (
                <div
                  className="rounded-xl overflow-hidden border card-hover group"
                  style={{
                    background: "var(--bg-card)",
                    borderColor: "var(--card-border)",
                  }}
                  key={d}
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={a0[d]}
                      alt={Cmp_l}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f3c]/90 to-transparent" />
                    <div
                      className="absolute top-4 left-4 p-2 rounded-lg"
                      style={{
                        background: "rgba(212,170,48,0.15)",
                        border: "1px solid rgba(212,170,48,0.4)",
                      }}
                    >
                      <Cmp_h
                        size={20}
                        style={{
                          color: "#f0c040",
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3
                      className="font-bold text-sm leading-tight mb-3"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        color: "var(--text-primary)",
                      }}
                    >
                      {Cmp_l}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{
                        color: "var(--text-muted)",
                      }}
                    >
                      {u}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <IndustrialGallery />
      <ContactSection sectionId="predial-contato" />
    </div>
  );
}
