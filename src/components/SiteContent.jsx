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
import { ServicesDialog } from "@/components/ServicesDialog";
import { ServicesOffshore } from "@/components/ServicesOffshore";
import { TechPage } from "@/components/TechPage";
import { useLang } from "@/lib/i18n";

export function SiteContent() {
  const [page, setPage] = React.useState("offshore");
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const { t } = useLang();

  const goto = (p) => () => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toOffshore = goto("offshore");
  const toPredial = goto("predial");
  const toDaily = goto("daily");
  const toTech = goto("tech");

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
    tech: [
      { id: "tech-inicio", label: t.nav.home },
      { id: "tech-sobre", label: t.nav.about },
      { id: "tech-sistema", label: t.nav.services },
      { id: "tech-mercado", label: t.tech.marketBadge },
      { id: "tech-contato", label: t.nav.contact },
    ],
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg-base)" }}>
      <SectionNav sections={sections[page]} />
      <Navbar
        onNavigateOffshore={toOffshore}
        onNavigateTech={toTech}
        onOpenServices={() => setServicesOpen(true)}
        currentPage={page}
      />
      <ServicesDialog
        open={servicesOpen}
        onClose={() => setServicesOpen(false)}
        onNavigateOffshore={toOffshore}
        onNavigatePredial={toPredial}
        onNavigateDaily={toDaily}
        onNavigateTech={toTech}
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
        <TechPage
          onNavigateContact={() => {
            toOffshore();
            setTimeout(() => {
              document
                .querySelector("#contato")
                ?.scrollIntoView({ behavior: "smooth" });
            }, 200);
          }}
        />
      )}
      <Footer currentPage={page} />
    </div>
  );
}
