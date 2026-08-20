// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Dentro da Lovable o build precisa do bundle de deploy (nitro). Fora dela
// (build local para Netlify/hosts estáticos) desligamos o nitro e geramos
// o HTML estático em dist/client/index.html.
const insideLovable = Boolean(
  process.env["LOVABLE"] || process.env["LOVABLE_SANDBOX"] || process.env["LOVABLE_NITRO_PRESET"],
);

export default defineConfig({
  ...(insideLovable ? {} : { nitro: false as const }),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(insideLovable
      ? {}
      : {
          prerender: { enabled: true, crawlLinks: false },
          pages: [{ path: "/", prerender: { enabled: true } }],
        }),
  },
});
