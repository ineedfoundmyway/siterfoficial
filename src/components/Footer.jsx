import { Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";
import { navigateToSection } from "@/lib/sectionAliases";
const techLogo = { url: "/tech/logo-rf-tech.webp" };

export const footerLinks =
  "https://maps.google.com/?q=Rua+Doutor+Pio+Borges+2055+Pita+Sao+Goncalo+RJ+CEP+24410-000";
export function Footer({ currentPage: n, onNavigateOffshore: e }) {

  const { t: s } = useLang(),
    i = s.footer,
    o = useReveal(0.05),
    Cmp_l = (d) => {
      navigateToSection({ page: n, href: d, goOffshore: e });
    },

    u = [
      {
        label: s.nav.home,
        href: "#inicio",
      },
      {
        label: s.nav.about,
        href: "#sobre",
      },
      {
        label: s.nav.services,
        href: "#servicos",
      },
      ...(n === "offshore"
        ? [
            {
              label: s.nav.partners,
              href: "#parceiros",
            },
          ]
        : []),
      {
        label: s.nav.contact,
        href: "#contato",
      },
    ];

  return (
    <footer
      style={{
        background: "var(--bg-base)",
        borderTop: "1px solid rgba(212,170,48,0.3)",
      }}
    >
      <div
        ref={o.ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 stagger-children ${o.isVisible ? "in-view" : ""}`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              {n === "tech" ? (
                <img
                  src={techLogo.url}
                  alt="RF Solutions"
                  className="h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-2xl object-contain"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <img
                  src="/logo-rf.svg"
                  alt="RF Soluções"
                  className="h-16 w-auto shrink-0"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
            <p
              className="text-xs leading-relaxed mb-3"
              style={{
                color: "var(--text-muted)",
              }}
            >
              {i.desc}
            </p>
            <p
              className="text-xs"
              style={{
                color: "#f0c040",
              }}
            >
              {"CNPJ: 45.393.750/0001-09"}
            </p>
          </div>
          <div>
            <h4
              className="font-semibold text-sm mb-4 tracking-wide"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {i.nav}
            </h4>
            <ul className="space-y-3">
              {u.map(({ label: d, href: Cmp_h }) => (
                <li key={Cmp_h}>
                  <button
                    onClick={() => Cmp_l(Cmp_h)}
                    className="text-sm transition-colors duration-200 text-left hover:text-[#f0c040]"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    {d}
                  </button>
                </li>
              ))}

            </ul>
          </div>
          <div>
            <h4
              className="font-semibold text-sm mb-4 tracking-wide"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {i.contactTitle}
            </h4>
            <a
              href="mailto:comercial@rf-offshore.com"
              className="flex items-center gap-2 text-sm transition-colors hover:text-[#f0c040]"
              style={{
                color: "var(--text-muted)",
              }}
            >
              <Mail
                size={13}
                style={{
                  flexShrink: 0,
                }}
              />
              {" comercial@rf-offshore.com"}
            </a>
          </div>
          <div>
            <h4
              className="font-semibold text-sm mb-4 tracking-wide"
              style={{
                fontFamily: "Montserrat, sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {i.addressTitle}
            </h4>
            <a
              href={footerLinks}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm transition-colors hover:text-[#f0c040]"
              style={{
                color: "var(--text-muted)",
              }}
            >
              <MapPin
                size={14}
                style={{
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              />
              <div>
                <p>{"Rua Doutor Pio Borges 2055"}</p>
                <p>{"Pita - SG - RJ"}</p>
                <p>{"CEP: 24410-000"}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(212,170,48,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-xs"
            style={{
              color: "var(--text-faint)",
            }}
          >
            {"© "}
            {new Date().getFullYear()}
            {" RF Soluções Offshore. "}
            {i.rights}
          </p>
          <p
            className="text-xs"
            style={{
              color: "var(--text-faint)",
            }}
          >
            {"CNPJ: 45.393.750/0001-09"}
          </p>
        </div>
      </div>
    </footer>
  );
}
