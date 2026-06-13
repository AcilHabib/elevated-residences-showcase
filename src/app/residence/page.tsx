import type { Metadata } from "next";

import ResidencePage from "@/views/residence-page";

export const metadata: Metadata = {
  title: "Résidence Azimour Bni Ksila — Benchallal Immo",
  description:
    "Résidence Azimour en construction à Bni Ksila — 6 blocs, piscines, parking. Promotion Benchallal A. Halim.",
  alternates: { canonical: "/residence" },
};

export default function Page() {
  return <ResidencePage />;
}
