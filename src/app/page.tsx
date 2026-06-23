import type { Metadata } from "next";

import HomePage from "@/views/home-page";

export const metadata: Metadata = {
  title: "Benchallal Immo — Résidence Plage de Rêve Beni Ksila",
  description:
    "Promotion Benchallal A. Halim (Benchallal Immo / P.B.A) — Résidence Plage de Rêve à Beni Ksila, 198 logements, 500 m de la route nationale. Promoteur immobilier à Béjaïa depuis 2014.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
