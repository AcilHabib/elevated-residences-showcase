import type { Metadata } from "next";

import FaqPage from "@/views/faq-page";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Crédit bancaire, modes de paiement, appartements, locaux commerciaux et prix : toutes les réponses.",
};

export default function Page() {
  return <FaqPage />;
}
