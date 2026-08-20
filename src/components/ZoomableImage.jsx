import React from "react";
import { Minus, Plus, RotateCcw } from "lucide-react";

const MIN = 1;
const MAX = 6;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

export function ZoomableImage({ src, alt }) {
  const containerRef = React.useRef(null);
  const [zoom, setZoom] = React.useState(1);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const stateRef = React.useRef({ zoom: 1, offset: { x: 0, y: 0 } });
  stateRef.current = { zoom, offset };

  const pointers = React.useRef(new Map());
  const pinch = React.useRef(null);
  const drag = React.useRef(null);

  const zoomAt = React.useCallback((next, px, py) => {
    const { zoom: z, offset: off } = stateRef.current;
    const nz = clamp(next, MIN, MAX);
    const k = nz / z;
    const nx = px - (px - off.x) * k;
    const ny = py - (py - off.y) * k;
    setZoom(nz);
    setOffset(nz === MIN ? { x: 0, y: 0 } : { x: nx, y: ny });
  }, []);

  const wheelRef = React.useRef(zoomAt);
  wheelRef.current = zoomAt;

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      const dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1);
      const rect = el.getBoundingClientRect();
      const factor = Math.exp(-dy * (e.ctrlKey ? 0.01 : 0.0018));
      wheelRef.current(
        stateRef.current.zoom * factor,
        e.clientX - rect.left,
        e.clientY - rect.top,
      );
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const center = () => {
    const el = containerRef.current;
    if (!el) return { x: 0, y: 0 };
    const r = el.getBoundingClientRect();
    return { x: r.width / 2, y: r.height / 2 };
  };

  const onPointerDown = (e) => {
    const el = containerRef.current;
    el?.setPointerCapture?.(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinch.current = {
        dist: Math.hypot(a.x - b.x, a.y - b.y),
        zoom: stateRef.current.zoom,
      };
      drag.current = null;
    } else if (pointers.current.size === 1) {
      drag.current = {
        x: e.clientX,
        y: e.clientY,
        off: { ...stateRef.current.offset },
      };
    }
  };

  const onPointerMove = (e) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();

    if (pointers.current.size >= 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const mx = (a.x + b.x) / 2 - rect.left;
      const my = (a.y + b.y) / 2 - rect.top;
      zoomAt((pinch.current.zoom * dist) / pinch.current.dist, mx, my);
      return;
    }
    if (drag.current && stateRef.current.zoom > 1) {
      setOffset({
        x: drag.current.off.x + (e.clientX - drag.current.x),
        y: drag.current.off.y + (e.clientY - drag.current.y),
      });
    }
  };

  const onPointerUp = (e) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinch.current = null;
    if (pointers.current.size === 0) drag.current = null;
  };

  const reset = () => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
  };

  const step = (dir) => {
    const c = center();
    zoomAt(stateRef.current.zoom * (dir > 0 ? 1.5 : 1 / 1.5), c.x, c.y);
  };

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-xl select-none"
        style={{
          touchAction: "none",
          cursor: zoom > 1 ? "grab" : "zoom-in",
          maxHeight: "80vh",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={(e) => {
          const rect = containerRef.current.getBoundingClientRect();
          if (zoom > 1) reset();
          else zoomAt(2.5, e.clientX - rect.left, e.clientY - rect.top);
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          decoding="async"
          className="mx-auto block max-h-[80vh] w-auto max-w-full object-contain"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            transformOrigin: "0 0",
            transition: pinch.current || drag.current ? "none" : "transform 120ms ease-out",
          }}
        />
      </div>
      <div
        className="relative z-10 mt-3 flex items-center justify-center gap-2"
        style={{ touchAction: "manipulation" }}
        onClick={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
      >
        {[
          { icon: Minus, fn: () => step(-1), label: "Diminuir zoom" },
          { icon: RotateCcw, fn: reset, label: "Redefinir zoom" },
          { icon: Plus, fn: () => step(1), label: "Aumentar zoom" },
        ].map(({ icon: Icon, fn, label }) => (
          <button
            key={label}
            type="button"
            onPointerUp={(e) => {
              e.stopPropagation();
              firedRef.current = true;
              fn();
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (firedRef.current) {
                firedRef.current = false;
                return;
              }
              fn();
            }}
            aria-label={label}
            className="rounded-full p-3 transition-transform active:scale-95"
            style={{
              background: "rgba(212,170,48,0.15)",
              border: "1px solid rgba(212,170,48,0.4)",
              color: "#f0c040",
              touchAction: "manipulation",
            }}
          >
            <Icon size={18} />
          </button>
        ))}

        <span
          className="ml-1 text-xs font-semibold tabular-nums"
          style={{ color: "rgba(226,232,240,0.8)" }}
        >
          {Math.round(zoom * 100)}%
        </span>
      </div>
    </div>
  );
}
