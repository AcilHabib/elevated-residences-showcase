import type { Metadata } from "next";

import ContactPage from "@/views/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez la promotion immobilière Benchallal A. Halim. Téléphone, WhatsApp, email.",
};

export default function Page() {
  return <ContactPage />;
}
