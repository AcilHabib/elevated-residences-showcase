"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";
import { RESIDENCE_NAME } from "@/lib/site";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative mt-32 border-t border-border bg-surface/50">
      <div className="container-luxury py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-16 md:h-20 min-w-[220px] md:min-w-[260px] mb-6" />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            {t("footer.tagline")}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-semibold">
            {t("footer.navigation")}
          </h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link href="/residence" className="hover:text-foreground transition-colors">
                {t("footer.link.residence")}
              </Link>
            </li>
            <li>
              <Link href="/plans" className="hover:text-foreground transition-colors">
                {t("footer.link.plans")}
              </Link>
            </li>
            <li>
              <Link href="/commercial" className="hover:text-foreground transition-colors">
                {t("footer.link.commercial")}
              </Link>
            </li>
            <li>
              <Link href="/location" className="hover:text-foreground transition-colors">
                {t("footer.link.location")}
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-foreground transition-colors">
                {t("nav.faq")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-semibold">
            {t("footer.contact")}
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
            {t("footer.address")}
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
            {RESIDENCE_NAME}
            <br />
            Béjaïa, Algérie
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <p className="uppercase tracking-[0.18em]">{t("footer.residence_line")}</p>
        </div>
      </div>
    </footer>
  );
}
