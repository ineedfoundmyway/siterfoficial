import React from "react";
import {
  BadgeCheck,
  BarChart3,
  Box,
  Camera,
  ChevronDown,
  Clock,
  Cpu,
  CreditCard,
  Info,
  Package,
  QrCode,
  ShieldCheck,
  ShoppingCart,
  Store,
  TrendingUp,
  Wrench,
  X,
  ZoomIn,
} from "lucide-react";
import { ContactSection } from "@/components/ContactSection";
import { useLang } from "@/lib/i18n";

import techLogo from "@/assets/logo-rf-tech.png.asset.json";

const shots = [
  "/__l5e/assets-v1/ddefc332-f631-4fa6-9724-8b4afb9a12c2/dashboard1.jpg",
  "/__l5e/assets-v1/6a36dfd2-9ae3-42fb-ae81-0d667ae7c69d/produtos.jpg",
  "/__l5e/assets-v1/4e0889d3-cc09-45ed-a284-618c783135fc/estoque.jpg",
  "/__l5e/assets-v1/e81786f2-c9ea-43bc-a1e4-bb55bc51f179/clientes.jpg",
  "/__l5e/assets-v1/a1ed3d83-5cdb-4ee2-a2c1-f54e1fdc689e/camera.jpg",
];

const BG = [
  "/__l5e/assets-v1/f9924dbd-7445-4fcd-8776-3d1b02a438e7/tech-bg.jpg",
  "/__l5e/assets-v1/b35d270f-5769-4e72-b6eb-f65ebb34883a/tech-bg-2.jpg",
  "/__l5e/assets-v1/d68adff8-d614-47d0-af07-ee5c86992178/tech-bg-3.jpg",
  "/__l5e/assets-v1/f3c3cfc7-76f8-4238-9f1f-c1a4edab711c/tech-bg-4.jpg",
];

const sectionBg = (url) => ({
  backgroundImage: `url('${url}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  boxShadow: "inset 0 0 0 100vmax rgba(5,13,26,0.88)",
});

const featureIcons = [BarChart3, TrendingUp, Package, BadgeCheck, CreditCard, Camera];
const complementIcons = [Store, Cpu, Camera, Wrench];
const stepIcons = [ShoppingCart, QrCode, CreditCard];


function Tag({ children }) {
  return (
    <span
      className="inline-block px-4 py-1 text-[11px] sm:text-xs font-semibold tracking-widest uppercase border rounded-full"
      style={{
        borderColor: "#d4aa30",
        color: "#d4aa30",
        background: "rgba(212,170,48,0.08)",
      }}
    >
      {children}
    </span>
  );
}

export function TechPage({ onNavigateContact }) {
  const { t } = useLang();
  const tech = t.tech;
  const [lightbox, setLightbox] = React.useState(null);

  React.useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const scrollTo = (sel) =>
    document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });


  return (
    <div style={{ background: "var(--bg-base)" }}>
      {/* HERO */}
      <section
        id="tech-inicio"
        className="relative overflow-hidden bg-fixed bg-cover bg-center pt-28 sm:pt-36 pb-16 px-4 sm:px-6"
        style={{
          backgroundImage:
            "url('/__l5e/assets-v1/f9924dbd-7445-4fcd-8776-3d1b02a438e7/tech-bg.jpg')",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(5,13,26,0.92), rgba(5,13,26,0.72) 55%, rgba(5,13,26,0.94))",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #d4aa30, transparent)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div
              className="inline-block p-3 rounded-2xl"
              style={{
                background: "rgba(212,170,48,0.08)",
                border: "2px solid rgba(212,170,48,0.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              <img
                src={techLogo.url}
                alt="RF Solutions"
                className="h-32 sm:h-40 md:h-48 w-auto mx-auto drop-shadow-2xl rounded-xl"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          <Tag>{tech.badge}</Tag>
          <h1
            className="mt-5 text-3xl sm:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "#f5f7fa",
            }}
          >
            {tech.title1}{" "}
            <span style={{ color: "#f0c040" }}>{tech.title2}</span>
          </h1>
          <p
            className="mt-5 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "rgba(226,232,240,0.85)" }}
          >
            {tech.subtitle}
          </p>

        </div>
        <div className="relative z-10 mt-12 flex justify-center">
          <button
            onClick={() => scrollTo("#tech-sistema")}
            className="hover:text-[#f0c040] transition-colors animate-bounce"
            style={{ color: "rgba(255,255,255,0.6)" }}
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* SOBRE */}
      <section id="tech-sobre" className="py-16 px-4 sm:px-6" style={sectionBg(BG[3])}>
        <div className="max-w-4xl mx-auto text-center">
          <Tag>{tech.aboutTag}</Tag>
          <h2
            className="mt-4 text-2xl sm:text-4xl font-bold"
            style={{ fontFamily: "Montserrat, sans-serif", color: "#f5f7fa" }}
          >
            {tech.aboutTitle1}{" "}
            <span style={{ color: "#f0c040" }}>{tech.aboutTitle2}</span>
          </h2>
          <div className="gold-divider mx-auto mt-4" />
          <p className="mt-6 text-sm sm:text-base leading-relaxed" style={{ color: "rgba(226,232,240,0.85)" }}>
            {tech.aboutP1}
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed" style={{ color: "rgba(226,232,240,0.7)" }}>
            {tech.aboutP2}
          </p>
        </div>
      </section>


      {/* FEATURES */}
      <section id="tech-sistema" className="py-16 px-4 sm:px-6" style={sectionBg(BG[1])}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Tag>{tech.featuresTag}</Tag>
            <h2
              className="mt-4 text-2xl sm:text-4xl font-bold"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#f5f7fa",
              }}
            >
              {tech.featuresTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tech.features.map((f, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border p-6 transition-transform hover:-translate-y-1"
                  style={{
                    background: "var(--bg-card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <span
                    className="inline-flex rounded-xl p-2.5"
                    style={{
                      background: "rgba(212,170,48,0.12)",
                      border: "1px solid rgba(212,170,48,0.35)",
                    }}
                  >
                    <Icon size={20} style={{ color: "#f0c040" }} />
                  </span>
                  <h3
                    className="mt-4 font-bold text-base"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 px-4 sm:px-6" style={sectionBg(BG[2])}>

        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Tag>{tech.galleryTag}</Tag>
            <h2
              className="mt-4 text-2xl sm:text-4xl font-bold"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#f5f7fa",
              }}
            >
              {tech.galleryTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {shots.map((src, i) => (
              <figure
                key={src}
                className={`group overflow-hidden rounded-2xl border ${i === 0 ? "md:col-span-2" : ""}`}
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--card-border)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="relative block w-full cursor-zoom-in"
                  aria-label={tech.gallery[i]?.caption ?? "RF Solutions"}
                >
                  <img
                    src={src}
                    alt={tech.gallery[i]?.caption ?? "RF Solutions"}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span
                    className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-semibold opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ background: "rgba(5,13,26,0.75)", color: "#f0c040" }}
                  >
                    <ZoomIn size={14} /> HD
                  </span>
                </button>
                <figcaption
                  className="px-4 py-3 text-xs sm:text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  {tech.gallery[i]?.caption}
                </figcaption>
              </figure>
            ))}

          </div>
        </div>
      </section>

      {/* SERVIÇOS COMPLEMENTARES */}
      <section className="py-16 px-4 sm:px-6" style={sectionBg(BG[3])}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Tag>{tech.complementTag}</Tag>
            <h2
              className="mt-4 text-2xl sm:text-4xl font-bold"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "#f5f7fa",
              }}
            >
              {tech.complementTitle}
            </h2>
            <p
              className="mt-4 mx-auto max-w-3xl text-sm sm:text-base leading-relaxed"
              style={{ color: "rgba(226,232,240,0.85)" }}
            >
              {tech.complementSubtitle}
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {(tech.complements ?? []).map((c, i) => {
              const Icon = complementIcons[i % complementIcons.length];
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border p-6"
                  style={{
                    background: "var(--bg-card)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex shrink-0 rounded-xl p-2.5"
                      style={{
                        background: "rgba(212,170,48,0.12)",
                        border: "1px solid rgba(212,170,48,0.35)",
                      }}
                    >
                      <Icon size={20} style={{ color: "#f0c040" }} />
                    </span>
                    <h3
                      className="font-bold text-base min-w-0"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        color: "var(--text-primary)",
                      }}
                    >
                      {c.title}
                    </h3>
                  </div>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MERCADO AUTONOMO — BOX ÚNICO */}
      <section id="tech-mercado" className="py-16 px-4 sm:px-6" style={sectionBg(BG[0])}>

        <div
          className="max-w-6xl mx-auto rounded-3xl border p-6 sm:p-10"
          style={{
            background:
              "linear-gradient(150deg, rgba(212,170,48,0.08), var(--bg-card))",
            borderColor: "rgba(212,170,48,0.45)",
            boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)",
          }}
        >
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between">
            <div className="min-w-0">
              <Tag>{tech.marketBadge}</Tag>
              <h2
                className="mt-4 text-2xl sm:text-3xl font-bold"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                {tech.marketTitle}
              </h2>
            </div>
            <Clock size={36} className="shrink-0" style={{ color: "#f0c040" }} />
          </div>
          <p
            className="mt-4 text-sm sm:text-base leading-relaxed max-w-3xl"
            style={{ color: "var(--text-muted)" }}
          >
            {tech.marketSubtitle}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {tech.marketSteps.map((s, i) => {
              const Icon = stepIcons[i % stepIcons.length];
              return (
                <div
                  key={s.title}
                  className="rounded-2xl border p-5"
                  style={{
                    background: "rgba(212,170,48,0.06)",
                    borderColor: "var(--card-border)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Icon size={18} className="shrink-0" style={{ color: "#f0c040" }} />
                    <span
                      className="font-bold text-sm"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        color: "var(--text-primary)",
                      }}
                    >
                      {`${i + 1}. ${s.title}`}
                    </span>
                  </div>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              { title: tech.marketStructureTitle, items: tech.marketStructure, Icon: Package },
              { title: tech.marketBenefitsTitle, items: tech.marketBenefits, Icon: TrendingUp },
              { title: tech.marketControlTitle, items: tech.marketControl, Icon: ShieldCheck },
            ].map(({ title, items, Icon }) => (
              <div
                key={title}
                className="rounded-2xl border p-5"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--card-border)",
                }}
              >
                <div className="flex items-center gap-2">
                  <Icon size={18} className="shrink-0" style={{ color: "#f0c040" }} />
                  <h3
                    className="font-bold text-sm"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "var(--text-primary)",
                    }}
                  >
                    {title}
                  </h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {items.map((it) => (
                    <li
                      key={it}
                      className="flex gap-2 text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span style={{ color: "#f0c040" }}>•</span>
                      <span className="min-w-0">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ESCOPO: estrutura não inclusa */}
          <div
            className="mt-6 flex gap-3 rounded-2xl border p-5"
            style={{
              background: "rgba(212,170,48,0.07)",
              borderColor: "rgba(212,170,48,0.4)",
            }}
          >
            <Info size={20} className="mt-0.5 shrink-0" style={{ color: "#f0c040" }} />
            <div className="min-w-0">
              <h3
                className="font-bold text-sm"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                {tech.marketScopeTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {tech.marketScopeNote}
              </p>
            </div>
          </div>

          {/* BOX 24H */}
          <div
            className="mt-6 rounded-2xl border p-5 sm:p-6"
            style={{
              background: "var(--bg-card)",
              borderColor: "var(--card-border)",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="inline-flex shrink-0 rounded-xl p-2.5"
                style={{
                  background: "rgba(212,170,48,0.12)",
                  border: "1px solid rgba(212,170,48,0.35)",
                }}
              >
                <Box size={20} style={{ color: "#f0c040" }} />
              </span>
              <div className="min-w-0">
                <Tag>{tech.boxBadge}</Tag>
                <h3
                  className="mt-2 text-lg sm:text-xl font-bold"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "var(--text-primary)",
                  }}
                >
                  {tech.boxTitle}
                </h3>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {tech.boxSubtitle}
            </p>
            <h4
              className="mt-5 font-bold text-sm"
              style={{ fontFamily: "Montserrat, sans-serif", color: "var(--text-primary)" }}
            >
              {tech.boxItemsTitle}
            </h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {(tech.boxItems ?? []).map((it) => (
                <li
                  key={it}
                  className="flex gap-2 text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span style={{ color: "#f0c040" }}>•</span>
                  <span className="min-w-0">{it}</span>
                </li>
              ))}
            </ul>
          </div>



          {/* PREÇOS */}
          <div className="mt-10">
            <Tag>{tech.priceTag}</Tag>
            <h3
              className="mt-3 text-xl sm:text-2xl font-bold"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {tech.priceTitle}
            </h3>
            <p className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>
              {tech.priceSubtitle}
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { label: tech.price1Label, value: tech.price1Value, desc: tech.price1Desc },
                { label: tech.price2Label, value: tech.price2Value, desc: tech.price2Desc },
              ].map((p) => (
                <div
                  key={p.label}
                  className="rounded-2xl border p-6"
                  style={{
                    background: "rgba(212,170,48,0.07)",
                    borderColor: "rgba(212,170,48,0.4)",
                  }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {p.label}
                  </p>
                  <p
                    className="mt-2 text-3xl font-bold"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "#f0c040",
                    }}
                  >
                    {p.value}
                  </p>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
            <p
              className="mt-4 text-sm italic"
              style={{ color: "var(--text-muted)" }}
            >
              {tech.priceNote}
            </p>
          </div>

          <div
            className="mt-10 flex flex-col items-start gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: "var(--divider)" }}
          >
            <p className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
              {tech.marketFooter}
            </p>
            <a
              href="#tech-contato"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#tech-contato");
              }}
              className="shrink-0 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
              style={{ background: "#f0c040", color: "#050d1a" }}
            >
              {tech.cta}
            </a>
          </div>

        </div>
      </section>

      <ContactSection sectionId="tech-contato" />

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ background: "rgba(5,13,26,0.94)", backdropFilter: "blur(6px)" }}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
            className="absolute right-4 top-4 rounded-full p-2 transition-colors"
            style={{ background: "rgba(212,170,48,0.15)", color: "#f0c040" }}
          >
            <X size={22} />
          </button>
          <figure
            className="max-h-full w-full max-w-6xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={shots[lightbox]}
              alt={tech.gallery[lightbox]?.caption ?? "RF Solutions"}
              className="mx-auto max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
            />
            <figcaption
              className="mt-3 text-center text-sm"
              style={{ color: "rgba(226,232,240,0.85)" }}
            >
              {tech.gallery[lightbox]?.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </div>

  );
}
