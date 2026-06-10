import type { Metadata } from "next";

import HomePage from "@/views/home-page";

export const metadata: Metadata = {
  title: "P.B.A — Résidence de prestige à Béjaïa",
  description:
    "Résidence sécurisée à 400 m de la mer à Béjaïa. Confort, qualité de vie et finitions premium.",
};

export default function Page() {
  return <HomePage />;
}
