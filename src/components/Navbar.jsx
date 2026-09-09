import React from "react";
import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { navigateToSection } from "@/lib/sectionAliases";

export function Navbar({
  onNavigateOffshore,
  onNavigateWallmarket,
  onOpenServices,
  currentPage,
}) {
  const { lang, setLang, t } = useLang();
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const lastY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (Math.abs(y - lastY.current) > 8) setOpen(false);
      // esconde ao rolar em qualquer direção; só aparece no topo da página
      setHidden(y > 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    navigateToSection({ page: currentPage, href, goOffshore: onNavigateOffshore });
  };

  const openServices = () => {
    setOpen(false);
    onOpenServices?.();
  };

  const openWallmarket = () => {
    setOpen(false);
    onNavigateWallmarket?.();
  };

  const allLinks = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.about, href: "#sobre" },
    { label: t.nav.services, href: "#servicos" },
    { label: t.nav.ourServices, action: openServices },
    { label: t.nav.wallmarket, action: openWallmarket },
    { label: t.nav.partners, href: "#parceiros" },
    { label: t.nav.contact, href: "#contato" },
  ];
  const links = currentPage === "offshore"
    ? allLinks
    : allLinks.filter((link) =>
        ![t.nav.ourServices, t.nav.partners, t.nav.contact].includes(link.label),
      );


  const LangSwitch = ({ compact }) => (
    <div
      className="flex shrink-0 items-center gap-1 rounded-full px-2 py-1"
      style={{
        background: "rgba(212,170,48,0.1)",
        border: "1px solid rgba(212,170,48,0.3)",
      }}
    >
      {!compact && <Globe size={12} style={{ color: "#f0c040" }} />}
      {["pt", "en"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="text-xs font-semibold px-1.5 py-0.5 rounded-full transition-all"
          style={
            lang === l
              ? { background: "#f0c040", color: "#050d1a" }
              : { color: "var(--nav-item-color)" }
          }
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  const ThemeBtn = () => (
    <button
      onClick={toggleTheme}
      title={isDark ? "Modo Claro" : "Modo Escuro"}
      aria-label={isDark ? "Modo Claro" : "Modo Escuro"}
      className="flex shrink-0 items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
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
    </button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm shadow-lg shadow-black/30" : "bg-transparent"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      style={scrolled ? { background: "var(--nav-bg-scrolled)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 h-16 sm:h-20">
          <button
            onClick={() => {
              if (currentPage === "offshore") onNavigateOffshore();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex min-w-0 items-center gap-2 sm:gap-3 text-left"
          >
            <img
              src={currentPage === "wallmarket" ? "/logo-rf-wallmarket-transparent.webp" : "/logo-rf.png"}
              alt={currentPage === "wallmarket" ? "RF Wallmarket" : "RF Soluções"}
              className={`${currentPage === "wallmarket" ? "h-10 w-36 sm:h-14 sm:w-52" : "h-11 w-11 sm:h-16 sm:w-16"} shrink-0 object-contain drop-shadow-lg`}
              decoding="async"
            />
            {currentPage !== "wallmarket" && <span
              className="truncate font-bold text-base sm:text-xl"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {"RF "}
              <span style={{ color: "var(--gold-400)" }}>{"Soluções"}</span>
            </span>}
          </button>

          <div className="hidden lg:flex items-center gap-5">
            <ul className="flex items-center gap-5">
              {links.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => (l.action ? l.action() : go(l.href))}
                    className="whitespace-nowrap transition-colors duration-200 text-sm font-medium tracking-wide hover:text-[#f0c040]"
                    style={{ color: "var(--nav-item-color)" }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
            <LangSwitch />
            <ThemeBtn />
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <LangSwitch compact />
            <ThemeBtn />
            <button
              style={{ color: "var(--text-primary)" }}
              className="p-2 shrink-0"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="lg:hidden border-t"
          style={{
            background: "var(--nav-bg-mobile)",
            borderColor: "var(--nav-border)",
          }}
        >
          <ul className="px-4 py-3 flex flex-col">
            {links.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => (l.action ? l.action() : go(l.href))}
                  className="hover:text-[#f0c040] transition-colors text-base font-medium w-full text-left py-3 border-b"
                  style={{
                    color: "var(--nav-item-color)",
                    borderColor: "var(--divider)",
                  }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
