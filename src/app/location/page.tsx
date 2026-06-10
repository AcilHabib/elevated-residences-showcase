import type { Metadata } from "next";

import LocationPage from "@/views/location-page";

export const metadata: Metadata = {
  title: "Localisation — Béjaïa",
  description: "À 400 m de la mer à Béjaïa. Découvrez l'emplacement stratégique de la résidence.",
};

export default function Page() {
  return <LocationPage />;
}
