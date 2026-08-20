import { Award, CheckCircle, Clock, Shield } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { useReveal } from "@/lib/useReveal";

export function About() {
  const { t } = useLang(),
    e = t.about,
    r = useReveal(),
    n = useReveal(0.1),
    s = useReveal(0.1),
    i = useReveal(0.08),
    o = [
      {
        icon: Award,
        value: "15+",
        label: e.stat1,
        sub: e.stat1sub,
      },
      {
        icon: CheckCircle,
        value: "100+",
        label: e.stat2,
        sub: e.stat2sub,
      },
      {
        icon: Clock,
        value: "24/7",
        label: e.stat3,
        sub: e.stat3sub,
      },
      {
        icon: Shield,
        value: "100%",
        label: e.stat4,
        sub: e.stat4sub,
      },
    ],
    a = [
      {
        icon: Shield,
        title: e.pillar1,
        desc: e.pillar1desc,
      },
      {
        icon: Award,
        title: e.pillar2,
        desc: e.pillar2desc,
      },
      {
        icon: Clock,
        title: e.pillar3,
        desc: e.pillar3desc,
      },
    ];
  return (
    <section
      id="sobre"
      className="relative py-24 section-bg-overlay parallax-bg"
      style={{
        backgroundImage: "url('/sobrenosoffshore.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center 50%",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 z-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, #d4aa30, transparent)",
        }}
      />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={r.ref}
          className={`text-center mb-14 reveal ${r.isVisible ? "in-view" : ""}`}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-2"
            style={{
              color: "#d4aa30",
            }}
          >
            {e.tag}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{
              fontFamily: "Montserrat, sans-serif",
              color: "var(--text-primary)",
            }}
          >
            {e.title1}{" "}
            <span
              style={{
                color: "#f0c040",
              }}
            >
              {e.title2}
            </span>
          </h2>
          <div className="gold-divider mx-auto mt-4" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div
            ref={n.ref}
            className={`space-y-6 reveal-left ${n.isVisible ? "in-view" : ""}`}
            style={{
              transitionDelay: "0.1s",
            }}
          >
            <p
              className="text-base leading-relaxed"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              <strong
                style={{
                  color: "#f0c040",
                }}
              >
                {"RF Soluções OFFSHORE"}
              </strong>
              {" — "}
              {e.p1}
            </p>
            <p
              className="text-base leading-relaxed"
              style={{
                color: "var(--text-muted)",
              }}
            >
              {e.p2}
            </p>
            <div className="space-y-4 mt-4">
              {[
                {
                  Icon: Shield,
                  title: e.missionTitle,
                  text: e.missionText,
                },
                {
                  Icon: Award,
                  title: e.visionTitle,
                  text: e.visionText,
                },
              ].map(({ Icon: l, title: u, text: d }) => (
                <div
                  className="p-5 rounded-lg border"
                  style={{
                    background: "var(--bg-inner)",
                    borderColor: "var(--card-border)",
                  }}
                  key={u}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <l
                      size={18}
                      style={{
                        color: "#f0c040",
                      }}
                    />
                    <h3
                      className="font-bold text-sm tracking-wide"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        color: "var(--text-primary)",
                      }}
                    >
                      {u}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: "var(--text-muted)",
                    }}
                  >
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            ref={s.ref}
            className={`grid grid-cols-2 gap-4 stagger-children ${s.isVisible ? "in-view" : ""}`}
          >
            {o.map(({ icon: l, value: u, label: d, sub: h }) => (
              <div
                className="p-6 rounded-xl border card-hover text-center"
                style={{
                  background: "var(--bg-card)",
                  borderColor: "var(--card-border)",
                }}
                key={d}
              >
                <div className="flex justify-center mb-3">
                  <div
                    className="p-3 rounded-full"
                    style={{
                      background: "rgba(212,170,48,0.1)",
                    }}
                  >
                    <l
                      size={24}
                      style={{
                        color: "#f0c040",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    color: "#f0c040",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {u}
                </div>
                <div
                  className="font-semibold text-sm"
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  {d}
                </div>
                <div
                  className="text-xs mt-1"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  {h}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          ref={i.ref}
          className={`grid sm:grid-cols-3 gap-6 stagger-children ${i.isVisible ? "in-view" : ""}`}
        >
          {a.map(({ icon: l, title: u, desc: d }) => (
            <div
              className="p-6 rounded-xl border card-hover text-center"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--card-border)",
              }}
              key={u}
            >
              <div className="flex justify-center mb-4">
                <div
                  className="p-4 rounded-full"
                  style={{
                    background: "rgba(212,170,48,0.1)",
                  }}
                >
                  <l
                    size={28}
                    style={{
                      color: "#f0c040",
                    }}
                  />
                </div>
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "var(--text-primary)",
                }}
              >
                {u}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--text-muted)",
                }}
              >
                {d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
