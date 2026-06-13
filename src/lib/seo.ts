import {
  COMPANY_EMAIL,
  COMPANY_LEGAL_NAME,
  COMPANY_SEO_NAMES,
  getSiteUrl,
  OFFICE_COORDS,
  OFFICE_MAPS_LINK,
  OFFICE_NAME,
  WHATSAPP_DISPLAY,
} from "./site";

export function buildOrganizationJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": `${siteUrl}/#organization`,
        name: COMPANY_LEGAL_NAME,
        alternateName: COMPANY_SEO_NAMES,
        url: siteUrl,
        logo: `${siteUrl}/pba-logo.png`,
        image: `${siteUrl}/images/simulations/03.jpg`,
        email: COMPANY_EMAIL,
        telephone: `+213${WHATSAPP_DISPLAY.replace(/\s/g, "").slice(1)}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Edimco",
          addressLocality: "Béjaïa",
          addressRegion: "Béjaïa",
          addressCountry: "DZ",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: OFFICE_COORDS.lat,
          longitude: OFFICE_COORDS.lng,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Béjaïa, Algérie",
        },
        description:
          "Promotion immobilière Benchallal A. Halim (Benchallal Immo / P.B.A) — promoteur immobilier à Béjaïa depuis 2014. Résidence Azimour à Bni Ksila, Résidence Almas à Amizour, Ighil El Bordj.",
        foundingDate: "2014",
        sameAs: [OFFICE_MAPS_LINK],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Benchallal Immo — P.B.A Béjaïa",
        alternateName: COMPANY_SEO_NAMES,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: ["fr", "en", "ar"],
      },
    ],
  };
}

export const DEFAULT_KEYWORDS = [
  "Benchallal immo",
  "Benchallal immobilier",
  "Promotion Benchallal",
  "Promotion Benchallal A Halim",
  "Promotion Benchallal Abdelhalim",
  "P.B.A Béjaïa",
  "promoteur immobilier Béjaïa",
  "immobilier Béjaïa",
  "Résidence Azimour",
  "Bni Ksila",
  "Résidence Almas Amizour",
  "Ighil El Bordj",
  "Edimco Béjaïa",
];

export const DEFAULT_DESCRIPTION =
  "Benchallal Immo — Promotion Benchallal A. Halim (P.B.A), promoteur immobilier à Béjaïa depuis 2014. Résidence Azimour à Bni Ksila, Résidence Almas à Amizour, Ighil El Bordj. Bureau Edimco Béjaïa.";
