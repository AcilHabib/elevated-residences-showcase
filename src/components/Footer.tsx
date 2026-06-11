import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface/50">
      <div className="container-luxury py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-16 md:h-20 min-w-[220px] md:min-w-[260px] mb-6" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Promoteur immobilier de prestige à Béjaïa. Bâtir un cadre de vie d&apos;exception, à 400
            mètres de la mer.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-semibold">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link href="/residence" className="hover:text-foreground transition-colors">
                La Résidence
              </Link>
            </li>
            <li>
              <Link href="/plans" className="hover:text-foreground transition-colors">
                Plans d&apos;étage
              </Link>
            </li>
            <li>
              <Link href="/commercial" className="hover:text-foreground transition-colors">
                Locaux commerciaux
              </Link>
            </li>
            <li>
              <Link href="/location" className="hover:text-foreground transition-colors">
                Localisation
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-foreground transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-semibold">
            Contact
          </h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> 0770 27 57 55
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> 0770 03 18 69
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> 0770 27 57 11
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <a
                href="mailto:promotion.benchallal@gmail.com"
                className="hover:text-foreground break-all"
              >
                promotion.benchallal@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-semibold">
            Adresse
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
            Béjaïa, Algérie
            <br />À 400 m de la mer
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Promotion Immobilière Benchallal A. Halim — P.B.A. Tous
            droits réservés.
          </p>
          <p className="uppercase tracking-[0.18em]">Résidence de prestige · Béjaïa</p>
        </div>
      </div>
    </footer>
  );
}
