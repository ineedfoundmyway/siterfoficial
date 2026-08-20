import React from "react";
import { Fragment } from "react";
import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { DailyPage } from "@/components/DailyPage";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Partners } from "@/components/Partners";
import { PredialPage } from "@/components/PredialPage";
import { SectionNav } from "@/components/SectionNav";
import { ServicesOffshore } from "@/components/ServicesOffshore";
import { useLang } from "@/lib/i18n";

export function SiteContent() {
  const [t, e] = React.useState("offshore"),
    { t: r } = useLang(),
    n = () => {
      (e("offshore"),
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        }));
    },
    s = () => {
      (e("predial"),
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        }));
    },
    i = () => {
      (e("daily"),
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        }));
    },
    o = [
      {
        id: "inicio",
        label: r.nav.home,
      },
      {
        id: "sobre",
        label: r.nav.about,
      },
      {
        id: "servicos",
        label: r.nav.services,
      },
      {
        id: "parceiros",
        label: r.nav.partners,
      },
      {
        id: "contato",
        label: r.nav.contact,
      },
    ],
    a = [
      {
        id: "predial-inicio",
        label: r.nav.home,
      },
      {
        id: "predial-sobre",
        label: r.nav.about,
      },
      {
        id: "predial-servicos",
        label: r.nav.services,
      },
      {
        id: "predial-contato",
        label: r.nav.contact,
      },
    ],
    Cmp_l = [
      {
        id: "diario-inicio",
        label: r.nav.home,
      },
      {
        id: "diario-servicos",
        label: r.nav.services,
      },
      {
        id: "diario-materiais",
        label: r.nav.daily,
      },
      {
        id: "diario-contato",
        label: r.nav.contact,
      },
    ];
  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--bg-base)",
      }}
    >
      <SectionNav
        sections={t === "offshore" ? o : t === "predial" ? a : Cmp_l}
      />
      <Navbar
        onNavigatePredial={s}
        onNavigateOffshore={n}
        onNavigateDaily={i}
        currentPage={t}
      />
      {t === "offshore" ? (
        <Fragment>
          <Hero />
          <About />
          <ServicesOffshore onNavigatePredial={s} />
          <Partners />
          <ContactSection />
          <Footer
            onNavigatePredial={s}
            onNavigateOffshore={n}
            onNavigateDaily={i}
            currentPage={t}
          />
        </Fragment>
      ) : t === "predial" ? (
        <Fragment>
          <PredialPage onNavigateOffshore={n} />
          <Footer
            onNavigatePredial={s}
            onNavigateOffshore={n}
            onNavigateDaily={i}
            currentPage={t}
          />
        </Fragment>
      ) : (
        <Fragment>
          <DailyPage />
          <Footer
            onNavigatePredial={s}
            onNavigateOffshore={n}
            onNavigateDaily={i}
            currentPage={t}
          />
        </Fragment>
      )}
    </div>
