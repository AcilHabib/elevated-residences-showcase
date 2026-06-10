import type { Metadata } from "next";

import ResidencePage from "@/views/residence-page";

export const metadata: Metadata = {
  title: "La Résidence — 6 blocs",
  description: "Découvrez les 6 blocs résidentiels de la résidence P.B.A à Béjaïa.",
};

export default function Page() {
  return <ResidencePage />;
}
