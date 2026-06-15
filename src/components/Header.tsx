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
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "glass-strong shadow-[var(--shadow-soft)] border-border/70"
          : "border-border/50 bg-background/95 backdrop-blur-xl shadow-[0_8px_32px_color-mix(in_oklab,var(--background)_40%,transparent)]",
      )}
    >
      <div className="container-luxury flex h-[5.25rem] md:h-24 lg:h-28 items-center justify-between gap-3 lg:gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-xl bg-background/95 px-2 py-1.5 ring-1 ring-border/50 shadow-sm"
        >
          <Logo
            priority
            className="h-[3.25rem] w-auto sm:h-14 md:h-[4.25rem] lg:h-20 xl:h-[5.25rem]"
          />
        </Link>

        <nav className="hidden lg:flex flex-1 items-stretch gap-0.5 rounded-full border border-border/60 bg-background/80 px-1 py-1 shadow-sm mx-1 min-w-0 max-w-[44rem] xl:max-w-[48rem]">
          {nav.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className={cn(
                "luxury-nav-link relative flex-1 min-w-0 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors",
                pathname === item.to
                  ? "bg-gold/15 text-gold"
                  : "text-foreground/90 hover:bg-foreground/5 hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-background/80 px-1 py-1 shadow-sm">
            <Globe className="h-3.5 w-3.5 text-muted-foreground mx-1.5 shrink-0" />
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
            className="rounded-full border border-border/60 bg-background/80 p-2.5 text-foreground/80 shadow-sm hover:text-gold transition-colors shrink-0"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Link
            href="/contact"
            className="hidden md:inline-flex luxury-btn luxury-btn-sm max-w-[8.5rem] shrink-0 bg-gradient-to-r from-primary to-[var(--gold)] text-primary-foreground shadow-[var(--shadow-luxury)] transition-transform hover:scale-[1.03]"
          >
            {t("cta.rdv")}
          </Link>

          <button
            className="lg:hidden rounded-full border border-border/60 bg-background/80 p-2.5 shadow-sm shrink-0"
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
                className={cn(
                  "luxury-nav-link rounded-xl px-3 py-3 text-sm font-medium uppercase tracking-[0.1em] transition-colors",
                  pathname === item.to
                    ? "bg-gold/10 text-gold"
                    : "text-foreground/80 hover:bg-foreground/5",
                )}
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
