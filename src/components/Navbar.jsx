import React from "react";
import { Globe, Moon, Sun } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";

export function Navbar({
  onNavigateOffshore,
  currentPage,
}) {
  const { lang, setLang } = useLang();
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const LangSwitch = () => (
    <div
      className="flex shrink-0 items-center gap-1 rounded-full px-2 py-1"
      style={{
        background: "rgba(212,170,48,0.1)",
        border: "1px solid rgba(212,170,48,0.3)",
      }}
    >
      <Globe size={12} className="shrink-0 text-gold" />
      {["pt", "en"].map((l) => (
        <Button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          variant="ghost"
          size="sm"
          className="h-6 rounded-full px-2 text-[10px] font-bold sm:text-xs"
          style={
            lang === l
              ? { background: "#f0c040", color: "#050d1a" }
              : { color: "var(--nav-item-color)" }
          }
        >
          {l === "pt" ? "PT-BR" : "EN"}
        </Button>
      ))}
    </div>
  );

  const ThemeBtn = () => (
    <Button
      type="button"
      onClick={toggleTheme}
      title={isDark ? "Modo Claro" : "Modo Escuro"}
      aria-label={isDark ? "Modo Claro" : "Modo Escuro"}
      variant="ghost"
      size="icon"
      className="h-9 w-9 shrink-0 rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
      style={{
        background: isDark ? "rgba(240,192,64,0.15)" : "rgba(30,58,110,0.12)",
        border: `1px solid ${isDark ? "rgba(240,192,64,0.4)" : "rgba(30,58,110,0.3)"}`,
      }}
    >
      {isDark ? (
        <Sun size={15} style={{ color: "#f0c040" }} />
      ) : (
        <Moon size={15} style={{ color: "#1e3a6e" }} />
      )}
    </Button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
      style={scrolled ? { background: "var(--nav-bg-scrolled)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:h-20">
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              onNavigateOffshore();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="h-auto min-w-0 justify-start px-0 hover:bg-transparent"
          >
            <span
              className="truncate text-base font-extrabold sm:text-xl"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {"RF "}
              <span style={{ color: "var(--gold-400)" }}>
                {currentPage === "wallmarket" ? "WALLMARKET" : "Soluções"}
              </span>
            </span>
          </Button>

          <div className="flex shrink-0 items-center gap-2">
            <LangSwitch />
            <ThemeBtn />
          </div>
        </div>
      </div>
    </nav>
  );
}
