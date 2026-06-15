import type { Metadata } from "next";

import LocationPage from "@/views/location-page";

export const metadata: Metadata = {
  title: "Localisation Beni Ksila — Benchallal Immo",
  description:
    "Résidence Plage de Rêve à Beni Ksila, bureau Edimco Béjaïa. Promotion Benchallal A. Halim — Résidence Almas à Amizour, Ighil El Bordj.",
  alternates: { canonical: "/location" },
};

export default function Page() {
  return <LocationPage />;
}
