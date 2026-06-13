/** Résidence Azimour — chantier à Bni Ksila (coords from official company QR code) */
export const RESIDENCE_COORDS = {
  lat: 36.878571,
  lng: 4.666678,
  label: "36°52'43\"N · 4°40'00\"E",
  place: "Bni Ksila, Béjaïa",
} as const;

export const RESIDENCE_NAME = "Résidence Azimour";

/** Siège & bureau commercial — Edimco, Béjaïa */
export const OFFICE_COORDS = {
  lat: 36.7444278,
  lng: 5.0511173,
  label: "36°44'40\"N · 5°03'04\"E",
  place: "Edimco, Béjaïa",
} as const;

export const OFFICE_NAME = "Promotion Benchallal Abdelhalim";
export const OFFICE_MAPS_LINK =
  "https://www.google.com/maps/place/PROMOTION+BENCHALLAL+ABDELHALIM/@36.7444278,5.0511173,17z";
export const OFFICE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${OFFICE_COORDS.lat},${OFFICE_COORDS.lng}&z=16&output=embed`;

export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${RESIDENCE_COORDS.lat},${RESIDENCE_COORDS.lng}&z=15&output=embed`;
export const MAPS_LINK_URL = `https://www.google.com/maps?q=${RESIDENCE_COORDS.lat},${RESIDENCE_COORDS.lng}`;

export const COMPANY_QR_SRC = "/images/company-qr.png";
/** Destination encoded in the official printed QR code */
export const COMPANY_QR_URL = MAPS_LINK_URL;

export const COMPANY_EMAIL = "promotion.benchallal@gmail.com";
export const COMPANY_LEGAL_NAME = "Promotion Benchallal A. Halim";
export const COMPANY_SEO_NAMES = [
  "Benchallal Immo",
  "Benchallal immobilier",
  "Promotion Benchallal Abdelhalim",
  "P.B.A Béjaïa",
];

export type CompanyProject = {
  id: string;
  nameKey: string;
  locationKey: string;
  units?: number;
  status: "completed" | "in_progress";
  featured?: boolean;
};

export const COMPANY_PROJECTS: CompanyProject[] = [
  {
    id: "almas",
    nameKey: "portfolio.almas.name",
    locationKey: "portfolio.almas.location",
    units: 66,
    status: "completed",
  },
  {
    id: "ighil",
    nameKey: "portfolio.ighil.name",
    locationKey: "portfolio.ighil.location",
    units: 66,
    status: "completed",
  },
  {
    id: "azimour",
    nameKey: "portfolio.azimour.name",
    locationKey: "portfolio.azimour.location",
    status: "in_progress",
    featured: true,
  },
];

export const PROMO_VIDEO_SRC = "/videos/pba-residence.mp4";
export const PROMO_VIDEO_POSTER = "/images/simulations/03.jpg";

/** WhatsApp for quote requests & client contact — +213 770 03 18 69 */
export const WHATSAPP_NUMBER = "213770031869";
export const WHATSAPP_DISPLAY = "0770 03 18 69";

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "https://benchallal-immo.com";
}
