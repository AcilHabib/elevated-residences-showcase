/** Résidence Azimour — coordinates from Google Maps */
export const RESIDENCE_COORDS = {
  lat: 36.638641,
  lng: 4.903275,
  label: "36°38'19.1\"N · 4°54'11.8\"E",
} as const;

export const RESIDENCE_NAME = "Résidence Azimour";

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${RESIDENCE_COORDS.lat},${RESIDENCE_COORDS.lng}&z=17&output=embed`;

export const MAPS_LINK_URL = `https://www.google.com/maps/place/${RESIDENCE_COORDS.lat},${RESIDENCE_COORDS.lng}`;

/** WhatsApp for quote requests & client contact — +213 770 03 18 69 */
export const WHATSAPP_NUMBER = "213770031869";
export const WHATSAPP_DISPLAY = "0770 03 18 69";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
