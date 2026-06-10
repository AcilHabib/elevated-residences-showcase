import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "fr" | "ar" | "en";

type Dict = Record<string, string>;

const translations: Record<Locale, Dict> = {
  fr: {
    "nav.home": "Accueil",
    "nav.residence": "La Résidence",
    "nav.plans": "Plans",
    "nav.commercial": "Locaux",
    "nav.location": "Localisation",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "cta.brochure": "Télécharger la brochure",
    "cta.discover": "Découvrir le projet",
    "cta.rdv": "Demander un RDV",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.residence": "الإقامة",
    "nav.plans": "المخططات",
    "nav.commercial": "المحلات",
    "nav.location": "الموقع",
    "nav.faq": "الأسئلة",
    "nav.contact": "اتصال",
    "cta.brochure": "تحميل الكتيب",
    "cta.discover": "اكتشف المشروع",
    "cta.rdv": "حجز موعد",
  },
  en: {
    "nav.home": "Home",
    "nav.residence": "The Residence",
    "nav.plans": "Floor Plans",
    "nav.commercial": "Commercial",
    "nav.location": "Location",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "cta.brochure": "Download brochure",
    "cta.discover": "Discover the project",
    "cta.rdv": "Book a meeting",
  },
};

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem("pba-locale") as Locale)) || "fr";
    setLocaleState(stored);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") localStorage.setItem("pba-locale", l);
  };

  const t = (key: string) => translations[locale][key] ?? translations.fr[key] ?? key;

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) return { locale: "fr" as Locale, setLocale: () => {}, t: (k: string) => translations.fr[k] ?? k };
  return ctx;
}
