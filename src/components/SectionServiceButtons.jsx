import React from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";

export function SectionServiceButtons({ sections, label, onOpenServices }) {
  const [targets, setTargets] = React.useState([]);

  React.useEffect(() => {
    setTargets(
      sections
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean),
    );
  }, [sections]);

  return targets.map((target) =>
    createPortal(
      <div className="section-service-picker" key={target.id}>
        <Button
          type="button"
          onClick={onOpenServices}
          className="h-10 rounded-full bg-gold px-5 text-xs font-bold text-primary-foreground shadow-lg hover:bg-gold/90 sm:h-11 sm:px-6 sm:text-sm"
          aria-label={label}
        >
          {label}
        </Button>
      </div>,
      target,
    ),
  );
}