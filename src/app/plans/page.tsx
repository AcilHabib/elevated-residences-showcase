import type { Metadata } from "next";

import PlansPage from "@/views/plans-page";

export const metadata: Metadata = {
  title: "Plans d'étage",
  description: "Plans PDF de chaque étage pour les blocs A à F de la résidence P.B.A.",
};

export default function Page() {
  return <PlansPage />;
}
