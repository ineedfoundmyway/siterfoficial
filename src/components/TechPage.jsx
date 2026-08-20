import React from "react";
import {
  BadgeCheck,
  BarChart3,
  Camera,
  Clock,
  CreditCard,
  Package,
  QrCode,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

const shots = [
  "/__l5e/assets-v1/ddefc332-f631-4fa6-9724-8b4afb9a12c2/dashboard1.jpg",
  "/__l5e/assets-v1/6a36dfd2-9ae3-42fb-ae81-0d667ae7c69d/produtos.jpg",
  "/__l5e/assets-v1/4e0889d3-cc09-45ed-a284-618c783135fc/estoque.jpg",
  "/__l5e/assets-v1/e81786f2-c9ea-43bc-a1e4-bb55bc51f179/clientes.jpg",
  "/__l5e/assets-v1/a1ed3d83-5cdb-4ee2-a2c1-f54e1fdc689e/camera.jpg",
];

const featureIcons = [BarChart3, TrendingUp, Package, BadgeCheck, CreditCard, Camera];
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

  const scrollTo = (sel) =>
    document.querySelector(sel)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ background: "var(--bg-base)" }}>
      {/* HERO */}
      <section
        id="tech-inicio"
        className="relative pt-28 sm:pt-36 pb-16 px-4 sm:px-6"
        style={{
          background:
            "linear-gradient(160deg, var(--bg-section), var(--bg-base))",
        }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <Tag>{tech.badge}</Tag>
          <h1
            className="mt-5 text-3xl sm:text-5xl font-bold leading-tight"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "var(--text-primary)",
            }}
          >
            {tech.title1}{" "}
            <span style={{ color: "#f0c040" }}>{tech.title2}</span>
          </h1>
          <p
            className="mt-5 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {tech.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => scrollTo("#tech-mercado")}
              className="rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
              style={{ background: "#f0c040", color: "#050d1a" }}
            >
              {tech.marketBadge}
            </button>
            <button
              onClick={() => onNavigateContact?.()}
              className="rounded-full border px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#f0c040] hover:text-[#050d1a]"
              style={{ borderColor: "#f0c040", color: "#f0c040" }}
            >
              {tech.cta}
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="tech-sistema" className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Tag>{tech.featuresTag}</Tag>
            <h2
              className="mt-4 text-2xl sm:text-4xl font-bold"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-primary)",
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
      <section
        className="py-16 px-4 sm:px-6"
        style={{ background: "var(--bg-section)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <Tag>{tech.galleryTag}</Tag>
            <h2
              className="mt-4 text-2xl sm:text-4xl font-bold"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {tech.galleryTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {shots.map((src, i) => (
              <figure
                key={src}
                className={`overflow-hidden rounded-2xl border ${i === 0 ? "md:col-span-2" : ""}`}
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--card-border)",
                }}
              >
                <img
                  src={src}
                  alt={tech.gallery[i]?.caption ?? "RF Solutions"}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
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

      {/* MERCADO AUTONOMO — BOX ÚNICO */}
      <section id="tech-mercado" className="py-16 px-4 sm:px-6">
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
            id="tech-contato"
            className="mt-10 flex flex-col items-start gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
            style={{ borderColor: "var(--divider)" }}
          >
            <p className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
              {tech.marketFooter}
            </p>
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contato");
              }}
              className="shrink-0 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105"
              style={{ background: "#f0c040", color: "#050d1a" }}
            >
              {tech.cta}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
