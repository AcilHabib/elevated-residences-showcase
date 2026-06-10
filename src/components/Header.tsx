"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n, type Locale } from "@/lib/i18n";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { to: "/", label: t("nav.home") },
    { to: "/residence", label: t("nav.residence") },
    { to: "/plans", label: t("nav.plans") },
    { to: "/commercial", label: t("nav.commercial") },
    { to: "/location", label: t("nav.location") },
    { to: "/faq", label: t("nav.faq") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong shadow-[var(--shadow-soft)]" : "bg-transparent",
      )}
    >
      <div className="container-luxury flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-11" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={cn(
                "relative px-3 py-2 text-[13px] font-medium uppercase tracking-[0.12em] transition-colors",
                pathname === item.to ? "text-gold" : "text-foreground/80 hover:text-foreground",
              )}
            >
              {item.label}
              {pathname === item.to && (
                <span className="absolute -bottom-0.5 left-3 right-3 h-px bg-gold" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1 glass rounded-full px-1 py-1">
            <Globe className="h-3.5 w-3.5 text-muted-foreground mx-1.5" />
            {(["fr", "en", "ar"] as Locale[]).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={cn(
                  "rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase transition-colors",
                  locale === l
                    ? "bg-gold text-gold-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="glass rounded-full p-2.5 text-foreground/80 hover:text-gold transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Link
            href="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-[var(--gold)] to-[oklch(from_var(--gold)_calc(l+0.08)_c_h)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.03]"
          >
            {t("cta.rdv")}
          </Link>

          <button
            className="lg:hidden glass rounded-full p-2.5"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border animate-fade-in">
          <nav className="container-luxury py-6 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                className="py-3 text-sm font-medium uppercase tracking-[0.12em] text-foreground/80"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4">
              {(["fr", "en", "ar"] as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-semibold uppercase",
                    locale === l
                      ? "bg-gold text-gold-foreground"
                      : "bg-muted text-muted-foreground",
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
