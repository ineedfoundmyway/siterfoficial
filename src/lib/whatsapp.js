// Monta o link do WhatsApp evitando o redirecionamento para api.whatsapp.com,
// que alguns navegadores (Brave/extensões de privacidade) bloqueiam.
export const WHATSAPP_NUMBER = "5521997931473";

export function whatsappUrl(text = "", phone = WHATSAPP_NUMBER) {
  const query = text ? `&text=${encodeURIComponent(text)}` : "";
  const isMobile =
    typeof navigator !== "undefined" &&
    /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent);
  return isMobile
    ? `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ""}`
    : `https://web.whatsapp.com/send?phone=${phone}${query}`;
}

export function openWhatsapp(text = "", phone = WHATSAPP_NUMBER) {
  window.open(whatsappUrl(text, phone), "_blank", "noopener,noreferrer");
}
