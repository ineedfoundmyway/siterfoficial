import React from "react";

export function useReveal(t = 0.12) {
  const e = React.useRef(null),
    [Cmp_r, n] = React.useState(!1);
  return (
    React.useEffect(() => {
      const s = e.current;
      if (!s) return;
      const i = new IntersectionObserver(([o]) => n(o.isIntersecting), {
        threshold: t,
        rootMargin: "0px 0px -40px 0px",
      });
      return (i.observe(s), () => i.disconnect());
    }, [t]),
    {
      ref: e,
      isVisible: Cmp_r,
    }
  );
}
