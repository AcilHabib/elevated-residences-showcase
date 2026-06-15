import type { Metadata } from "next";

import ResidencePage from "@/views/residence-page";

export const metadata: Metadata = {
  title: "Résidence Plage de Rêve Beni Ksila — Benchallal Immo",
  description:
    "Résidence Plage de Rêve en construction à Beni Ksila — 198 logements, 6 blocs, piscines, parking. Promotion Benchallal A. Halim.",
  alternates: { canonical: "/residence" },
};

export default function Page() {
  return <ResidencePage />;
}
