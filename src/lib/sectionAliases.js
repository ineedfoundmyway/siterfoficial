// Mapeia os links genéricos de navegação para as seções reais de cada página.
export const sectionAliases = {
  offshore: {
    "#inicio": "#inicio",
    "#sobre": "#sobre",
    "#servicos": "#servicos",
    "#parceiros": "#parceiros",
    "#contato": "#contato",
  },
  predial: {
    "#inicio": "#predial-inicio",
    "#sobre": "#predial-sobre",
    "#servicos": "#predial-servicos",
    "#contato": "#predial-contato",
  },
  daily: {
    "#inicio": "#diario-inicio",
    "#sobre": "#diario-sobre",
    "#servicos": "#diario-servicos",
    "#contato": "#diario-contato",
  },
  wallmarket: {
    "#inicio": "#wallmarket-inicio",
    "#sobre": "#wallmarket-sobre",
    "#servicos": "#wallmarket-operacao",
  },
};

export function resolveSection(page, href) {
  return sectionAliases[page]?.[href] ?? null;
}

export function scrollToSelector(sel) {
  const el = document.querySelector(sel);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  }
  return false;
}

/**
 * Navega para a seção equivalente na página atual.
 * Se a seção não existir (ex.: Parceiros só na Offshore), volta para a Offshore.
 */
export function navigateToSection({ page, href, goOffshore }) {
  const target = resolveSection(page, href);
  if (target && scrollToSelector(target)) return;
  if (goOffshore) {
    goOffshore();
    setTimeout(() => scrollToSelector(href), 250);
  } else {
    scrollToSelector(href);
  }
}
