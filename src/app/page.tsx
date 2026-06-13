import type { Metadata } from "next";

import HomePage from "@/views/home-page";

export const metadata: Metadata = {
  title: "Benchallal Immo — Résidence Azimour Bni Ksila",
  description:
    "Promotion Benchallal A. Halim (Benchallal Immo / P.B.A) — Résidence Azimour à Bni Ksila, 400 m de la mer. Promoteur immobilier à Béjaïa depuis 2014.",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}
