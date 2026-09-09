import { ChevronDown, Shield, Target, Wrench } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const { t } = useLang(),
    e = (Cmp_r) => {
      const n = document.querySelector(Cmp_r);
      n &&
        n.scrollIntoView({
          behavior: "smooth",
        });
    };
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex flex-col text-center overflow-hidden parallax-bg"
      style={{
        backgroundImage: "url('/hero-bg.webp')",
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
              className="inline-block p-2 rounded-xl"
              style={{
                background: "rgba(212,170,48,0.08)",
                border: "2px solid rgba(212,170,48,0.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              <img
                src="/logo-rf.png"
                alt="RF Soluções Offshore"
                className="h-36 w-36 sm:h-44 sm:w-44 md:h-48 md:w-48 mx-auto object-contain drop-shadow-2xl"
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
              {t.hero.badge}
            </span>
          </div>
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#ffffff",
            }}
          >
            {t.hero.title1}{" "}
            <span
              style={{
                color: "#f0c040",
              }}
            >
              {t.hero.title2}
              <br />
              {t.hero.title3}
            </span>
          </h1>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.85)",
            }}
          >
            {t.hero.subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              {
                icon: Shield,
                label: t.hero.badge1,
              },
              {
                icon: Wrench,
                label: t.hero.badge2,
              },
              {
                icon: Target,
                label: t.hero.badge3,
              },
            ].map(({ icon: Cmp_r, label: n }) => (
              <div
                className="flex items-center gap-2 text-sm sm:text-base"
                style={{
                  color: "rgba(255,255,255,0.9)",
                }}
                key={n}
              >
                <Cmp_r
                  size={18}
                  style={{
                    color: "#f0c040",
                  }}
                />
                <span>{n}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-20 flex justify-center pb-6 pt-2">
        <button
          onClick={() => e("#sobre")}
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
  );
}
