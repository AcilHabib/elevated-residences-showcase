import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Providers } from "@/components/providers";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const ogImage =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/96cacf56-0901-4e30-a2df-b676fa2a366f/id-preview-27e9e347--e1247828-f65a-43e4-b85c-d42830ba283b.lovable.app-1781053889088.png";

export const metadata: Metadata = {
  title: {
    default: "P.B.A — Résidence de prestige à Béjaïa",
    template: "%s — P.B.A Béjaïa",
  },
  description:
    "Promotion Immobilière Benchallal A. Halim. Résidence de prestige à 400 m de la mer à Béjaïa : confort, sécurité, qualité de vie.",
  authors: [{ name: "P.B.A — Benchallal A. Halim" }],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "P.B.A — Résidence de prestige à Béjaïa",
    description:
      "Promotion Immobilière Benchallal A. Halim. Résidence de prestige à 400 m de la mer à Béjaïa : confort, sécurité, qualité de vie.",
    type: "website",
    url: siteUrl,
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "P.B.A — Résidence de prestige à Béjaïa",
    description:
      "Promotion Immobilière Benchallal A. Halim. Résidence de prestige à 400 m de la mer à Béjaïa : confort, sécurité, qualité de vie.",
    images: [ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Cairo:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
