import React from "react";

export const ThemeContext = React.createContext(null);
export function ThemeProvider({ children: t }) {
  const [e, r] = React.useState("dark");
  (React.useEffect(() => {
    const s = localStorage.getItem("rf-theme");
    s && r(s);
  }, []),
    React.useEffect(() => {
      const s = document.documentElement;
      (e === "light" ? s.classList.add("light") : s.classList.remove("light"),
        localStorage.setItem("rf-theme", e));
    }, [e]));
  const n = () => r((s) => (s === "dark" ? "light" : "dark"));
  return (
    <ThemeContext.Provider
      value={{
        theme: e,
        toggleTheme: n,
        isDark: e === "dark",
      }}
    >
      {t}
    </ThemeContext.Provider>
  );
}
export function useTheme() {
  const t = React.useContext(ThemeContext);
  if (!t) throw new Error("useTheme must be used inside ThemeProvider");
  return t;
}
