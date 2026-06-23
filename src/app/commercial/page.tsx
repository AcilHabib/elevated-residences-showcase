import type { Metadata } from "next";

import CommercialPage from "@/views/commercial-page";

export const metadata: Metadata = {
  title: "Appartements & locaux commerciaux",
  description:
    "Surfaces des appartements F2, F3 et F4, et locaux commerciaux au rez-de-chaussée — Résidence Plage de Rêve.",
};

export default function Page() {
  return <CommercialPage />;
}
