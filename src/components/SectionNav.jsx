import React from "react";
import { Fragment } from "react";

export function SectionNav({ sections: t }) {
  var u;
  const [e, r] = React.useState(((u = t[0]) == null ? void 0 : u.id) ?? ""),
    [n, s] = React.useState(0),
    [i, o] = React.useState(null),
    a = React.useRef(0);
  (React.useEffect(() => {
    const d = () => {
      (a.current && cancelAnimationFrame(a.current),
        (a.current = requestAnimationFrame(() => {
          const h = document.documentElement,
            f = h.scrollTop,
            v = h.scrollHeight - h.clientHeight;
          s(v > 0 ? (f / v) * 100 : 0);
        })));
    };
    return (
      window.addEventListener("scroll", d, {
        passive: !0,
      }),
      () => {
        (window.removeEventListener("scroll", d),
          a.current && cancelAnimationFrame(a.current));
      }
    );
  }, []),
    React.useEffect(() => {
      const d = new Map(),
        h = () => {
          if (d.size === 0) return;
          let v = "",
            y = 0;
          (d.forEach((x, j) => {
            x > y && ((y = x), (v = j));
          }),
            v && r(v));
        },
        f = new IntersectionObserver(
          (v) => {
            (v.forEach((y) => {
              y.isIntersecting
                ? (d.set(y.target.id, y.intersectionRatio),
                  y.target.classList.remove("section-bg-entered"),
                  y.target.offsetHeight,
                  y.target.classList.add("section-bg-entered"))
                : (d.delete(y.target.id),
                  y.target.classList.remove("section-bg-entered"));
            }),
              h());
          },
          {
            threshold: [0, 0.1, 0.3, 0.5, 0.75],
            rootMargin: "-5% 0px -5% 0px",
          },
        );
      return (
        t.forEach(({ id: v }) => {
          const y = document.getElementById(v);
          y && f.observe(y);
        }),
        () => {
          (f.disconnect(),
            t.forEach(({ id: v }) => {
              var y;
              (y = document.getElementById(v)) == null ||
                y.classList.remove("section-bg-entered");
            }));
        }
      );
    }, [t]));
  const l = (d) => {
    const h = document.getElementById(d);
    h &&
      h.scrollIntoView({
        behavior: "smooth",
      });
  };
  return (
    <Fragment>
      <div
        className="fixed top-0 left-0 z-[200] h-[3px] transition-none"
        style={{
          width: `${n}%`,
          background: "linear-gradient(90deg, #b8860b, #f0c040, #d4aa30)",
          boxShadow: "0 0 8px rgba(240,192,64,0.6)",
          transitionProperty: "width",
          transitionDuration: "80ms",
          transitionTimingFunction: "linear",
        }}
      />
      <nav
        className="fixed right-5 top-1/2 -translate-y-1/2 z-[150] hidden lg:flex flex-col gap-4 items-end"
        aria-label="Navegação por seções"
      >
        {t.map(({ id: d, label: h }) => {
          const f = e === d;
          return (
            <div className="relative flex items-center gap-2 group" key={d}>
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-md pointer-events-none select-none whitespace-nowrap transition-all duration-200"
                style={{
                  background: "rgba(10,22,40,0.92)",
                  border: "1px solid rgba(212,170,48,0.35)",
                  color: "#f0c040",
                  opacity: i === d ? 1 : 0,
                  transform: i === d ? "translateX(0)" : "translateX(6px)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {h}
              </span>
              <button
                onClick={() => l(d)}
                onMouseEnter={() => o(d)}
                onMouseLeave={() => o(null)}
                aria-label={h}
                className="rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f0c040]"
                style={{
                  width: f ? "12px" : "8px",
                  height: f ? "12px" : "8px",
                  background: f
                    ? "linear-gradient(135deg, #d4aa30, #f0c040)"
                    : "rgba(255,255,255,0.25)",
                  border: f
                    ? "2px solid #f0c040"
                    : "1.5px solid rgba(255,255,255,0.4)",
                  boxShadow: f ? "0 0 10px rgba(240,192,64,0.55)" : "none",
                }}
              />
            </div>
          );
        })}
      </nav>
    </Fragment>
  );
}
