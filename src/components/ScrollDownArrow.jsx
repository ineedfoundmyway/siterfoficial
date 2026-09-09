import React from "react";
import { ArrowDown } from "lucide-react";

/**
 * Seta animada fixa no rodapé: leva para a próxima seção da página.
 * Fica oculta quando o usuário chega ao fim do documento.
 */
export function ScrollDownArrow({ sections = [] }) {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setVisible(el.scrollHeight - el.clientHeight - el.scrollTop > 120);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goNext = () => {
    const tops = sections
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
      .map((el) => el.getBoundingClientRect().top + window.scrollY);
    const next = tops.find((top) => top > window.scrollY + 80);
    if (typeof next === "number") {
      window.scrollTo({ top: next - 8, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={goNext}
      aria-label="Ir para a próxima seção"
      className={`fixed bottom-[4.75rem] left-1/2 z-40 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border transition-opacity duration-300 animate-bounce ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{
        borderColor: "rgba(240,192,64,0.85)",
        background: "rgba(5,13,26,0.55)",
        color: "#ffffff",
        backdropFilter: "blur(6px)",
      }}
    >
      <ArrowDown size={20} />
    </button>
  );
}
