import { Handshake } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";

export const partners = [
    {
      src: "/logo-oceanica.svg",
      bg: "white",
    },
    {
      src: "/logo-assessorart.svg",
      bg: "#22aa44",
    },
    {
      src: "/logo-sansil.svg",
      bg: "white",
    },
    {
      src: "/logo-stone.svg",
      bg: "#00A868",
      cover: true,
    },
    {
      src: "/logo-rf-wallmarket-transparent.webp",
      bg: "#050d1a",
    },
  ],
  Mm = [
    {
      name: "Oceânica Engenharia e Consultoria S.A",
    },
    {
      name: "Assessorart Artworkers",
    },
    {
      name: "Sansil Led | Iluminação Led",
    },
    {
      name: "Stone | Pagamentos e Gestão",
    },
    {
      name: "RF Wallmarket | Lojas Autônomas 24h",
    },
  ];
export function Partners() {
  const { t } = useLang(),
    e = t.partners,
    Cmp_r = useReveal(),
    n = useReveal(0.08),
    s = useReveal(0.1),
    i = () => {
      const o = document.querySelector("#contato");
      o &&
        o.scrollIntoView({
          behavior: "smooth",
        });
    };
  return (
    <section
      id="parceiros"
      className="relative py-24 section-bg-overlay parallax-bg"
      style={{
        backgroundImage: "url('/bg-partners.webp')",
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
          ref={Cmp_r.ref}
          className={`text-center mb-14 reveal ${Cmp_r.isVisible ? "in-view" : ""}`}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-2"
            style={{
              color: "#d4aa30",
            }}
          >
            {e.tag}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "var(--text-primary)",
            }}
          >
            {e.title1}{" "}
            <span
              style={{
                color: "#f0c040",
              }}
            >
              {e.title2}
            </span>
          </h2>
          <div className="gold-divider mx-auto mt-4" />
          <p
            className="mt-4 max-w-xl mx-auto text-sm sm:text-base"
            style={{
              color: "var(--text-muted)",
            }}
          >
            {e.subtitle}
          </p>
        </div>
        <div
          ref={n.ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 stagger-children ${n.isVisible ? "in-view" : ""}`}
        >
          {Mm.map(({ name: o }, a) => (
            <div
              className="p-6 rounded-xl border card-hover flex flex-col items-center text-center"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--card-border)",
              }}
              key={o}
            >
              <div
                className="w-full h-24 flex items-center justify-center rounded-lg mb-4 overflow-hidden"
                style={{
                  background: partners[a].bg,
                  border: "1px solid rgba(212,170,48,0.2)",
                  padding: partners[a].cover ? "0" : "8px",
                }}
              >
                <img
                  src={partners[a].src}
                  alt={o}
                  className={
                    partners[a].cover
                      ? "w-full h-full object-cover"
                      : "max-h-full max-w-full object-contain"
                  }
                  style={partners[a].cover ? undefined : { maxHeight: "72px" }}
                  loading="lazy"
                />
              </div>

              <h3
                className="font-semibold text-sm mb-2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                {o}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: "#f0c040",
                }}
              >
                {e.partnerDescriptions[a]}
              </p>
            </div>
          ))}
        </div>
        <div
          ref={s.ref}
          className={`p-8 rounded-2xl border text-center reveal-scale ${s.isVisible ? "in-view" : ""}`}
          style={{
            background: "var(--bg-inner)",
            borderColor: "var(--card-border)",
          }}
        >
          <div className="flex justify-center mb-4">
            <div
              className="p-4 rounded-full"
              style={{
                background: "rgba(212,170,48,0.12)",
              }}
            >
              <Handshake
                size={32}
                style={{
                  color: "#f0c040",
                }}
              />
            </div>
          </div>
          <h3
            className="text-xl font-bold mb-2"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "var(--text-primary)",
            }}
          >
            {e.ctaTitle}
          </h3>
          <p
            className="text-sm max-w-md mx-auto mb-6"
            style={{
              color: "var(--text-muted)",
            }}
          >
            {e.ctaDesc}
          </p>
          <div className="flex justify-center">
            <button
              onClick={i}
              className="px-8 py-3 font-semibold rounded transition-all duration-200 hover:brightness-110 text-[#050d1a] active:scale-95"
              style={{
                background: "linear-gradient(135deg, #d4aa30, #f0c040)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              {e.ctaBtn1}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
