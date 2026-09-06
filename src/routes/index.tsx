import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";
import { SiteContent } from "@/components/SiteContent";

const title = "RF Soluções Offshore | Manutenção Elétrica Offshore";
const description =
  "Especialistas em serviços técnicos de alta confiabilidade para o setor marítimo e offshore, oferecendo soluções com qualidade, agilidade e segurança.";

const ogImage = "https://rf-offshore.com/og-rf.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content:
          "Especialistas em serviços técnicos de alta confiabilidade para o setor marítimo e offshore.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: ogImage },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SiteContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
