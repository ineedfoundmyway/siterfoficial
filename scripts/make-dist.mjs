// Copia a saída do build para ./dist, para quem espera a pasta padrão "dist".
import { cp, rm, stat } from "node:fs/promises";

const candidates = [".output", "dist-build", ".nitro/output"];
let source = null;
for (const c of candidates) {
  try {
    if ((await stat(c)).isDirectory()) {
      source = c;
      break;
    }
  } catch {}
}

if (!source) {
  console.warn("[make-dist] nenhuma pasta de build encontrada; dist não foi criada.");
  process.exit(0);
}

await rm("dist", { recursive: true, force: true });
await cp(source, "dist", { recursive: true });
console.log(`[make-dist] "${source}" copiado para "dist".`);
