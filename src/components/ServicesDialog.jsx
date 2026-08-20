import React from "react";
import { Building2, Cpu, Ship, Wrench, X } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function ServicesDialog({
  open,
  onClose,
  onNavigateOffshore,
  onNavigatePredial,
  onNavigateDaily,
  onNavigateTech,
}) {
  const { t } = useLang();

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const items = [
    {
      icon: Ship,
      title: t.nav.offshore,
      desc: t.servicesBox.offshore,
      action: onNavigateOffshore,
    },
    {
      icon: Building2,
      title: t.nav.terrestrial,
      desc: t.servicesBox.predial,
      action: onNavigatePredial,
    },
    {
      icon: Wrench,
      title: t.nav.daily,
      desc: t.servicesBox.daily,
      action: onNavigateDaily,
    },
    {
      icon: Cpu,
      title: t.nav.tech,
      desc: t.servicesBox.tech,
      action: onNavigateTech,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(3,10,22,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border p-5 sm:p-8"
        style={{
          background: "var(--bg-card)",
          borderColor: "rgba(212,170,48,0.45)",
          boxShadow: "0 24px 60px -20px rgba(0,0,0,0.7)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 p-1 rounded-full transition-colors hover:text-[#f0c040]"
          style={{ color: "var(--text-muted)" }}
        >
          <X size={20} />
        </button>
        <p
          className="text-xs font-semibold tracking-widest uppercase"
          style={{ color: "#d4aa30" }}
        >
          {t.servicesBox.tag}
        </p>
        <h3
          className="mt-1 text-xl sm:text-2xl font-bold"
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "var(--text-primary)",
          }}
        >
          {t.servicesBox.title}
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, desc, action }) => (
            <button
              key={title}
              onClick={() => {
                onClose();
                action();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex min-w-0 items-start gap-3 rounded-xl border p-4 text-left transition-all hover:-translate-y-0.5"
              style={{
                background: "rgba(212,170,48,0.05)",
                borderColor: "var(--card-border)",
              }}
            >
              <span
                className="shrink-0 rounded-lg p-2"
                style={{
                  background: "rgba(212,170,48,0.15)",
                  border: "1px solid rgba(212,170,48,0.4)",
                }}
              >
                <Icon size={18} style={{ color: "#f0c040" }} />
              </span>
              <span className="min-w-0">
                <span
                  className="block font-bold text-sm group-hover:text-[#f0c040]"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "var(--text-primary)",
                  }}
                >
                  {title}
                </span>
                <span
                  className="mt-1 block text-xs leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {desc}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
