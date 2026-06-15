import type { Metadata } from "next";

import PlansPage from "@/views/plans-page";

export const metadata: Metadata = {
  title: "Plans d'appartement",
  description: "Plans PDF par type d'appartement F2, F3 et F4 — Résidence Plage de Rêve P.B.A.",
};

export default function Page() {
  return <PlansPage />;
}
