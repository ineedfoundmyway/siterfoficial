import React from "react";
import { Cpu, Gauge, Snowflake, X, Zap, CircuitBoard, Play, Pause } from "lucide-react";
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
  const [playing, setPlaying] = React.useState({});
  const videoRefs = React.useRef({});

  const togglePlay = (idx) => {
    const video = videoRefs.current[idx];
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying((p) => ({ ...p, [idx]: true }));
    } else {
      video.pause();
      setPlaying((p) => ({ ...p, [idx]: false }));
    }
  };

  const handleEnded = (idx) => {
    setPlaying((p) => ({ ...p, [idx]: false }));
  };

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
          {ITEMS.map((item, idx) => {
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
                <div className="relative bg-black h-64 sm:h-72">
                  {item.type === "video" ? (
                    <>
                      <video
                        ref={(el) => (videoRefs.current[idx] = el)}
                        src={item.src}
                        poster={item.poster}
                        muted
                        playsInline
                        preload="metadata"
                        disablePictureInPicture
                        controlsList="nodownload noplaybackrate"
                        onContextMenu={(e) => e.preventDefault()}
                        onEnded={() => handleEnded(idx)}
                        onPlay={() => setPlaying((p) => ({ ...p, [idx]: true }))}
                        onPause={() => setPlaying((p) => ({ ...p, [idx]: false }))}
                        onClick={() => togglePlay(idx)}
                        className="w-full h-full object-cover cursor-pointer"
                      />
                      <button
                        type="button"
                        onClick={() => togglePlay(idx)}
                        className="absolute inset-0 flex items-center justify-center group z-10"
                        aria-label={
                          playing[idx]
                            ? `Pausar ${item.title}`
                            : `Assistir ${item.title}`
                        }
                        style={{ background: playing[idx] ? "transparent" : "rgba(3,10,22,0.35)" }}
                      >
                        <span
                          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full transition-all duration-300 group-hover:scale-110"
                          style={{
                            background: "rgba(212,170,48,0.92)",
                            boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                            opacity: playing[idx] ? 0 : 1,
                          }}
                        >
                          {playing[idx] ? (
                            <Pause size={26} fill="#030a16" style={{ color: "#030a16" }} />
                          ) : (
                            <Play size={26} fill="#030a16" style={{ color: "#030a16", marginLeft: 3 }} />
                          )}
                        </span>
                      </button>
                      {playing[idx] && (
                        <button
                          type="button"
                          onClick={() => togglePlay(idx)}
                          aria-label={`Pausar ${item.title}`}
                          className="absolute top-3 right-3 z-20 p-2 rounded-full transition-transform duration-200 hover:scale-110"
                          style={{
                            background: "rgba(212,170,48,0.92)",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.45)",
                          }}
                        >
                          <Pause size={16} fill="#030a16" style={{ color: "#030a16" }} />
                        </button>
                      )}
                    </>

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
                    className="absolute top-3 left-3 p-2 rounded-lg z-10"
                    style={{
                      background: "rgba(212,170,48,0.15)",
                      border: "1px solid rgba(212,170,48,0.4)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#f0c040" }} />
                  </span>

                  <div
                    className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-5"
                    style={{
                      background: "linear-gradient(to top, rgba(3,10,22,0.95) 0%, rgba(3,10,22,0.85) 60%, rgba(3,10,22,0) 100%)",
                      borderTop: "1px solid rgba(212,170,48,0.25)",
                    }}
                  >
                    <h3
                      className="font-bold text-sm sm:text-base leading-tight mb-2"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        color: "#f0c040",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: "rgba(226,232,240,0.85)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
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
