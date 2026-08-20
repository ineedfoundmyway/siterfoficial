import { Activity, Eye, Layers, Settings, ShieldCheck, Waves, Zap } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";

export const serviceIcons = [Zap, Settings, Eye, Activity, Layers, ShieldCheck, Waves],
  zm = [
    "/svc-offshore-1.jpeg",
    "/svc-offshore-2.jpeg",
    "/svc-offshore-3.jpeg",
    "/svc-offshore-4.jpeg",
    "/svc-offshore-5.jpeg",
    "/svc-offshore-6.jpg",
    "/svc-offshore-7.jpeg",
  ];
export function ServicesOffshore({ onNavigatePredial: t }) {
  const { t: e } = useLang(),
    Cmp_r = e.services,
    n = useReveal(),
    s = useReveal(0.05);
  return (
    <section
      id="servicos"
      className="relative py-24 section-bg-overlay parallax-bg"
      style={{
        backgroundImage: "url('/bg-services-offshore.jpeg')",
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
          ref={n.ref}
          className={`text-center mb-14 reveal ${n.isVisible ? "in-view" : ""}`}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-2"
            style={{
              color: "#d4aa30",
            }}
          >
            {Cmp_r.tag}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "var(--text-primary)",
            }}
          >
            {Cmp_r.title1}{" "}
            <span
              style={{
                color: "#f0c040",
              }}
            >
              {Cmp_r.title2}
            </span>
          </h2>
          <div className="gold-divider mx-auto mt-4" />
          <p
            className="mt-4 max-w-2xl mx-auto text-sm sm:text-base"
            style={{
              color: "var(--text-muted)",
            }}
          >
            {Cmp_r.subtitle}
          </p>
        </div>
        <div
          ref={s.ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${s.isVisible ? "in-view" : ""}`}
        >
          {Cmp_r.list.map(({ title: i, desc: o }, a) => {
            const Cmp_l = serviceIcons[a];
            return (
              <div
                className="rounded-xl overflow-hidden border card-hover group"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--card-border)",
                }}
                key={a}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={zm[a]}
                    alt={i}
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
                    <Cmp_l
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
                    {i}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    {o}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`text-center mt-12 reveal ${s.isVisible ? "in-view" : ""}`}
          style={{
            transitionDelay: "0.5s",
          }}
        >
          <button
            onClick={() => {
              (t(),
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                }));
            }}
            className="px-10 py-3 font-semibold rounded border-2 transition-all duration-200 hover:bg-[#f0c040] hover:text-[#050d1a] active:scale-95"
            style={{
              borderColor: "#f0c040",
              color: "#f0c040",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {Cmp_r.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
