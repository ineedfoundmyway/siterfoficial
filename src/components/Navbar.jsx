import React from "react";
import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";

export function Navbar({
  onNavigatePredial: t,
  onNavigateOffshore: e,
  onNavigateDaily: Cmp_r,
  currentPage: n,
}) {
  const { lang: s, setLang: i, t: o } = useLang(),
    { isDark: a, toggleTheme: Cmp_l } = useTheme(),
    [u, d] = React.useState(!1),
    [h, f] = React.useState(!1),
    [v, y] = React.useState(!1),
    x = React.useRef(0);
  React.useEffect(() => {
    const w = () => {
      const k = window.scrollY;
      (d(k > 60),
        Math.abs(k - x.current) > 8 && f(!1),
        window.innerWidth < 768
          ? k > window.innerHeight * 0.8 && k > x.current
            ? y(!0)
            : k < x.current && y(!1)
          : y(!1),
        (x.current = k));
    };
    return (
      window.addEventListener("scroll", w, {
        passive: !0,
      }),
      () => window.removeEventListener("scroll", w)
    );
  }, []);
  const j = {
      "#inicio": "#predial-inicio",
      "#sobre": "#predial-sobre",
      "#servicos": "#predial-servicos",
      "#contato": "#predial-contato",
    },
    g = (w) => {
      if ((f(!1), n === "predial")) {
        const k = j[w];
        if (k) {
          const b = document.querySelector(k);
          b &&
            b.scrollIntoView({
              behavior: "smooth",
            });
          return;
        }
        (e(),
          setTimeout(() => {
            const b = document.querySelector(w);
            b &&
              b.scrollIntoView({
                behavior: "smooth",
              });
          }, 150));
      } else if (n === "daily") {
        const b = {
          "#inicio": "#diario-inicio",
          "#servicos": "#diario-servicos",
          "#materiais": "#diario-materiais",
          "#contato": "#diario-contato",
        }[w];
        if (b) {
          const S = document.querySelector(b);
          S &&
            S.scrollIntoView({
              behavior: "smooth",
            });
          return;
        }
        (e(),
          setTimeout(() => {
            const S = document.querySelector(w);
            S &&
              S.scrollIntoView({
                behavior: "smooth",
              });
          }, 150));
      } else {
        const k = document.querySelector(w);
        k &&
          k.scrollIntoView({
            behavior: "smooth",
          });
      }
    },
    p = [
      {
        label: o.nav.home,
        href: "#inicio",
      },
      {
        label: o.nav.about,
        href: "#sobre",
      },
      {
        label: o.nav.services,
        href: "#servicos",
      },
      {
        label: o.nav.partners,
        href: "#parceiros",
      },
      {
        label: o.nav.contact,
        href: "#contato",
      },
    ],
    m = u ? "backdrop-blur-sm shadow-lg shadow-black/30" : "bg-transparent";
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${m} ${v ? "-translate-y-full" : "translate-y-0"}`}
      style={
        u
          ? {
              background: "var(--nav-bg-scrolled)",
            }
          : void 0
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => {
              (e(),
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                }));
            }}
            className="flex items-center gap-3"
          >
            <img
              src="/logo-rf.svg"
              alt="RF Soluções"
              className="h-16 w-16 object-contain drop-shadow-lg"
            />
            <span
              className="font-bold text-xl"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {"RF "}
              <span
                style={{
                  color: "var(--gold-400)",
                }}
              >
                {"Soluções"}
              </span>
            </span>
          </button>
          <ul className="hidden md:flex items-center gap-5">
            {p.map((w) => (
              <li key={w.href}>
                <button
                  onClick={() => g(w.href)}
                  className="transition-colors duration-200 text-sm font-medium tracking-wide hover:text-[#f0c040]"
                  style={{
                    color: "var(--nav-item-color)",
                  }}
                >
                  {w.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  (f(!1),
                    e(),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    }));
                }}
                className="transition-colors duration-200 text-sm font-medium tracking-wide hover:text-[#f0c040]"
                style={{
                  color: n === "offshore" ? "#a8d0ff" : "var(--nav-item-color)",
                }}
              >
                {o.nav.offshore}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  (f(!1),
                    t(),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    }));
                }}
                className="transition-colors duration-200 text-sm font-medium tracking-wide hover:text-[#f0c040]"
                style={{
                  color: n === "predial" ? "#a8d0ff" : "var(--nav-item-color)",
                }}
              >
                {o.nav.terrestrial}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  (f(!1), Cmp_r());
                }}
                className="transition-colors duration-200 text-sm font-medium tracking-wide hover:text-[#f0c040]"
                style={{
                  color: n === "daily" ? "#a8d0ff" : "var(--nav-item-color)",
                }}
              >
                {o.nav.daily}
              </button>
            </li>
            <li>
              <div
                className="flex items-center gap-1 rounded-full px-2 py-1"
                style={{
                  background: "rgba(212,170,48,0.1)",
                  border: "1px solid rgba(212,170,48,0.3)",
                }}
              >
                <Globe
                  size={12}
                  style={{
                    color: "#f0c040",
                  }}
                />
                <button
                  onClick={() => i("pt")}
                  className={`text-xs font-semibold px-1.5 py-0.5 rounded-full transition-all ${s === "pt" ? "text-[#050d1a]" : "hover:text-[#f0c040]"}`}
                  style={
                    s === "pt"
                      ? {
                          background: "#f0c040",
                          color: "#050d1a",
                        }
                      : {
                          color: "var(--nav-item-color)",
                        }
                  }
                >
                  {"PT"}
                </button>
                <button
                  onClick={() => i("en")}
                  className={`text-xs font-semibold px-1.5 py-0.5 rounded-full transition-all ${s === "en" ? "text-[#050d1a]" : "hover:text-[#f0c040]"}`}
                  style={
                    s === "en"
                      ? {
                          background: "#f0c040",
                          color: "#050d1a",
                        }
                      : {
                          color: "var(--nav-item-color)",
                        }
                  }
                >
                  {"EN"}
                </button>
              </div>
            </li>
            <li>
              <button
                onClick={Cmp_l}
                title={a ? "Modo Claro" : "Modo Escuro"}
                className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                  background: a
                    ? "rgba(240,192,64,0.15)"
                    : "rgba(30,58,110,0.12)",
                  border: `1px solid ${a ? "rgba(240,192,64,0.4)" : "rgba(30,58,110,0.3)"}`,
                }}
              >
                {a ? (
                  <Sun
                    size={15}
                    style={{
                      color: "#f0c040",
                    }}
                  />
                ) : (
                  <Moon
                    size={15}
                    style={{
                      color: "#1e3a6e",
                    }}
                  />
                )}
              </button>
            </li>
          </ul>
          <div className="md:hidden flex items-center gap-2">
            <div
              className="flex items-center gap-0.5 rounded-full px-2 py-1"
              style={{
                background: "rgba(212,170,48,0.1)",
                border: "1px solid rgba(212,170,48,0.3)",
              }}
            >
              <button
                onClick={() => i("pt")}
                className="text-xs font-bold px-1 py-0.5 rounded-full transition-all"
                style={
                  s === "pt"
                    ? {
                        background: "#f0c040",
                        color: "#050d1a",
                      }
                    : {
                        color: "var(--nav-item-color)",
                      }
                }
              >
                {"PT"}
              </button>
              <button
                onClick={() => i("en")}
                className="text-xs font-bold px-1 py-0.5 rounded-full transition-all"
                style={
                  s === "en"
                    ? {
                        background: "#f0c040",
                        color: "#050d1a",
                      }
                    : {
                        color: "var(--nav-item-color)",
                      }
                }
              >
                {"EN"}
              </button>
            </div>
            <button
              onClick={Cmp_l}
              className="flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300"
              style={{
                background: a
                  ? "rgba(240,192,64,0.15)"
                  : "rgba(30,58,110,0.12)",
                border: `1px solid ${a ? "rgba(240,192,64,0.4)" : "rgba(30,58,110,0.3)"}`,
              }}
            >
              {a ? (
                <Sun
                  size={14}
                  style={{
                    color: "#f0c040",
                  }}
                />
              ) : (
                <Moon
                  size={14}
                  style={{
                    color: "#1e3a6e",
                  }}
                />
              )}
            </button>
            <button
              style={{
                color: "var(--text-primary)",
              }}
              className="p-2"
              onClick={() => f(!h)}
              aria-label="Menu"
            >
              {h ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {h && (
        <div
          className="md:hidden border-t"
          style={{
            background: "var(--nav-bg-mobile)",
            borderColor: "var(--nav-border)",
          }}
        >
          <ul className="px-4 py-4 flex flex-col gap-3">
            {p.map((w) => (
              <li key={w.href}>
                <button
                  onClick={() => g(w.href)}
                  className="hover:text-[#f0c040] transition-colors text-base font-medium w-full text-left py-2 border-b"
                  style={{
                    color: "var(--nav-item-color)",
                    borderColor: "var(--divider)",
                  }}
                >
                  {w.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  (f(!1),
                    e(),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    }));
                }}
                className="hover:text-white transition-colors text-base font-medium w-full text-left py-2 border-b"
                style={{
                  color: n === "offshore" ? "#a8d0ff" : "var(--gold-400)",
                  borderColor: "var(--divider)",
                }}
              >
                {o.nav.offshore}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  (f(!1),
                    t(),
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    }));
                }}
                className="hover:text-white transition-colors text-base font-medium w-full text-left py-2 border-b"
                style={{
                  color: n === "predial" ? "#a8d0ff" : "var(--gold-400)",
                  borderColor: "var(--divider)",
                }}
              >
                {o.nav.terrestrial}
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  (f(!1), Cmp_r());
                }}
                className="hover:text-white transition-colors text-base font-medium w-full text-left py-2 border-b"
                style={{
                  color: n === "daily" ? "#a8d0ff" : "var(--gold-400)",
                  borderColor: "var(--divider)",
                }}
              >
                {o.nav.daily}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
