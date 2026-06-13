import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Providers } from "@/components/providers";
import { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";

import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Benchallal Immo — Promotion Benchallal A. Halim | P.B.A Béjaïa",
    template: "%s | Benchallal Immo P.B.A",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: "Promotion Benchallal A. Halim — Benchallal Immo" }],
  creator: "Promotion Benchallal A. Halim",
  publisher: "P.B.A — Benchallal Immo",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Benchallal Immo — Promotion Benchallal A. Halim | P.B.A Béjaïa",
    description: DEFAULT_DESCRIPTION,
    type: "website",
    url: siteUrl,
    siteName: "Benchallal Immo P.B.A",
    locale: "fr_DZ",
    images: [{ url: "/pba-logo.png", width: 1536, height: 1024, alt: "P.B.A — Benchallal Immo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benchallal Immo — P.B.A Béjaïa",
    description: DEFAULT_DESCRIPTION,
    images: ["/pba-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <JsonLd />
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
