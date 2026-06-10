import type { Metadata } from "next";

import CommercialPage from "@/views/commercial-page";

export const metadata: Metadata = {
  title: "Locaux commerciaux",
  description:
    "Opportunités d'investissement : locaux commerciaux F2, F3 et F4 au sein de la résidence.",
};

export default function Page() {
  return <CommercialPage />;
}
