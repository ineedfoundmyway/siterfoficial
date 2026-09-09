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
import { SectionServiceButtons } from "@/components/SectionServiceButtons";
import { ServicesDialog } from "@/components/ServicesDialog";
import { ServicesOffshore } from "@/components/ServicesOffshore";
import { WallmarketPage } from "@/components/WallmarketPage";
import { useLang } from "@/lib/i18n";

const PAGE_SLUGS = {
  offshore: "offshore",
  predial: "predial",
  daily: "diarios",
  wallmarket: "wallmarket",
};
const SLUG_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_SLUGS).map(([p, s]) => [s, p]),
);

function readPageFromUrl() {
  if (typeof window === "undefined") return "offshore";
  const s = new URLSearchParams(window.location.search).get("servico");
  return (s && SLUG_TO_PAGE[s]) || "offshore";
}

export function SiteContent() {
  const [page, setPage] = React.useState("offshore");
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const { t } = useLang();

  // Sincroniza o estado com a URL (inicial + botões voltar/avançar)
  React.useEffect(() => {
    // O site sempre inicia na página inicial (Offshore)
    setPage("offshore");
    if (window.location.search) {
      window.history.replaceState({ page: "offshore" }, "", window.location.pathname);
    }
    const onPop = () => setPage(readPageFromUrl());
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Atualiza título do navegador conforme o serviço
  React.useEffect(() => {
    const titles = {
      offshore: `RF Soluções Offshore | ${t.nav.offshore ?? "Serviços Offshore"}`,
      predial: `RF Soluções | ${t.nav.terrestrial}`,
      daily: `RF Soluções | ${t.nav.daily ?? "Serviços Diários"}`,
      wallmarket: "RF Soluções e RF Wallmarket | Operação 24h",
    };
    document.title = titles[page] ?? titles.offshore;
  }, [page, t]);

  const goto = (p) => () => {
    setPage(p);
    const url =
      p === "offshore"
        ? window.location.pathname
        : `${window.location.pathname}?servico=${PAGE_SLUGS[p]}`;
    if (readPageFromUrl() !== p) window.history.pushState({ page: p }, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toOffshore = goto("offshore");
  const toPredial = goto("predial");
  const toDaily = goto("daily");
  const toWallmarket = goto("wallmarket");

  const sections = {
    offshore: [
      { id: "inicio", label: t.nav.home },
      { id: "sobre", label: t.nav.about },
      { id: "servicos", label: t.nav.services },
      { id: "parceiros", label: t.nav.partners },
      { id: "contato", label: t.nav.contact },
    ],
    predial: [
      { id: "predial-inicio", label: t.nav.home },
      { id: "predial-sobre", label: t.nav.about },
      { id: "predial-servicos", label: t.nav.services },
      { id: "predial-contato", label: t.nav.contact },
    ],
    daily: [
      { id: "diario-inicio", label: t.nav.home },
      { id: "diario-sobre", label: t.nav.about },
      { id: "diario-servicos", label: t.nav.services },
      { id: "diario-materiais", label: t.nav.daily },
      { id: "diario-contato", label: t.nav.contact },
    ],
    wallmarket: [
      { id: "wallmarket-inicio", label: t.nav.home },
      { id: "wallmarket-sobre", label: t.nav.about },
      { id: "wallmarket-operacao", label: t.nav.operation },
      { id: "wallmarket-modelos", label: t.nav.models },
    ],
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-base)" }}>
      <SectionNav
        sections={sections[page]}
        onOpenServices={() => setServicesOpen(true)}
        onNavigateOffshore={toOffshore}
      />
      <Navbar
        onNavigateOffshore={toOffshore}
        currentPage={page}
      />
      <ServicesDialog
        open={servicesOpen}
        onClose={() => setServicesOpen(false)}
        onNavigateOffshore={toOffshore}
        onNavigatePredial={toPredial}
        onNavigateDaily={toDaily}
        onNavigateWallmarket={toWallmarket}
      />
      {page === "offshore" ? (
        <Fragment>
          <Hero />
          <About />
          <ServicesOffshore onOpenServices={() => setServicesOpen(true)} />
          <Partners />
          <ContactSection />
        </Fragment>
      ) : page === "predial" ? (
        <PredialPage onNavigateOffshore={toOffshore} />
      ) : page === "daily" ? (
        <DailyPage />
      ) : (
        <WallmarketPage />
      )}
      <SectionServiceButtons
        sections={sections[page]}
        label={t.nav.backHome ?? "Ver outros serviços"}
        onOpenServices={() => setServicesOpen(true)}
      />
      <Footer currentPage={page} onNavigateOffshore={toOffshore} />
    </div>
  );
}
