import type { Metadata } from "next";

import LocationPage from "@/views/location-page";

export const metadata: Metadata = {
  title: "Localisation Bni Ksila — Benchallal Immo",
  description:
    "Résidence Azimour à Bni Ksila, bureau Edimco Béjaïa. Promotion Benchallal A. Halim — Almas Amizour, Ighil El Bordj.",
  alternates: { canonical: "/location" },
};

export default function Page() {
  return <LocationPage />;
}
