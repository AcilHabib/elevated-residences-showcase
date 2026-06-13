import type { Metadata } from "next";

import ContactPage from "@/views/contact-page";

export const metadata: Metadata = {
  title: "Contact — Benchallal Immo P.B.A",
  description:
    "Contactez Promotion Benchallal A. Halim (Benchallal Immo). Bureau Edimco Béjaïa, WhatsApp 0770 03 18 69.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}
