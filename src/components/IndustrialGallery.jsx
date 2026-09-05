import React from "react";
import { Cpu, Gauge, Snowflake, X, Zap, CircuitBoard } from "lucide-react";
import { ZoomableImage } from "@/components/ZoomableImage";
import { useReveal } from "@/lib/useReveal";

const ITEMS = [
  {
    type: "video",
    src: "/industrial/industrial-1.mp4",
    poster: "/industrial/poster-1.webp",
    icon: Zap,
    title: "Painel de Grupo Gerador (QTA/USCA)",
    desc: "Instalação, comissionamento e manutenção de painéis de geradores 380V com controlador automático de transferência. Garantimos energia de emergência confiável, testes de partida, ajuste de parâmetros e sinalização de segurança conforme NR-10.",
  },
  {
    type: "video",
    src: "/industrial/industrial-2.mp4",
    poster: "/industrial/poster-2.webp",
    icon: Gauge,
    title: "Inversores de Frequência e Acionamentos",
    desc: "Montagem, parametrização e manutenção de inversores de frequência (ABB e equivalentes) para bombas, ventiladores e motores industriais. Resultado: partida suave, economia de energia e maior vida útil dos equipamentos.",
  },
  {
    type: "video",
    src: "/industrial/industrial-3.mp4",
    poster: "/industrial/poster-3.webp",
    icon: Cpu,
    title: "Painéis de Automação com CLP",
    desc: "Projeto e montagem de painéis de comando e CCM com CLP, relés, disjuntores e borneiras identificadas. Executamos cabeamento, diagrama unifilar, testes funcionais e integração completa da automação da planta.",
  },
  {
    type: "image",
    src: "/industrial/foto-eletronica.webp",
    icon: CircuitBoard,
    title: "Manutenção de Eletrônica de Potência",
    desc: "Reparo em bancada de placas eletrônicas industriais: módulos IGBT, capacitores de barramento, placas de disparo e circuitos de controle. Diagnóstico, substituição de componentes e testes antes do retorno à operação.",
  },
  {
    type: "image",
    src: "/industrial/foto-refrigeracao.webp",
    icon: Snowflake,
    title: "Climatização e Refrigeração",
    desc: "Instalação e manutenção de sistemas split inverter, incluindo suporte, tubulação, vácuo, carga de gás R32 e alimentação elétrica dedicada. Atendemos ambientes industriais, comerciais e salas técnicas.",
  },
];

export function IndustrialGallery() {
  const head = useReveal();
  const grid = useReveal(0.05);
  const [lightbox, setLightbox] = React.useState(null);

  React.useEffect(() => {
    if (!lightbox) return;
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <section
      id="predial-industrial"
      className="relative py-24"
      style={{ background: "var(--bg-base)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 z-20"
        style={{
          background: "linear-gradient(90deg, transparent, #d4aa30, transparent)",
        }}
      />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={head.ref}
          className={`text-center mb-14 reveal ${head.isVisible ? "in-view" : ""}`}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#d4aa30" }}
          >
            {"Na prática"}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "var(--text-primary)",
            }}
          >
            {"Serviços "}
            <span style={{ color: "#f0c040" }}>{"Industriais"}</span>
          </h2>
          <div className="gold-divider mx-auto mt-4" />
          <p
            className="mt-4 max-w-2xl mx-auto text-sm sm:text-base"
            style={{ color: "var(--text-muted)" }}
          >
            {
              "Registros reais de execuções da nossa equipe em plantas industriais, comércios e prédios."
            }
          </p>
        </div>

        <div
          ref={grid.ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${grid.isVisible ? "in-view" : ""}`}
        >
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-xl overflow-hidden border card-hover flex flex-col"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--card-border)",
                }}
              >
                <div className="relative bg-black h-60 sm:h-64">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      poster={item.poster}
                      controls
                      muted
                      playsInline
                      preload="none"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setLightbox(item)}
                      className="block w-full h-full"
                      aria-label={`Ampliar ${item.title}`}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </button>
                  )}
                  <span
                    className="absolute top-3 left-3 p-2 rounded-lg"
                    style={{
                      background: "rgba(212,170,48,0.15)",
                      border: "1px solid rgba(212,170,48,0.4)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#f0c040" }} />
                  </span>
                </div>
                <div className="p-5 flex-1">
                  <h3
                    className="font-bold text-sm leading-tight mb-3"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[120] flex flex-col p-3 sm:p-6"
          style={{ background: "rgba(3,10,22,0.92)" }}
          onClick={() => setLightbox(null)}
        >
          <div className="flex justify-end">
            <button
              onClick={() => setLightbox(null)}
              aria-label="Fechar"
              className="p-2 rounded-full transition-colors hover:text-[#f0c040]"
              style={{ color: "#fff" }}
            >
              <X size={24} />
            </button>
          </div>
          <div
            className="flex-1 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <ZoomableImage src={lightbox.src} alt={lightbox.title} />
          </div>
        </div>
      )}
    </section>
  );
}
