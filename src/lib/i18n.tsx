"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

import { translations } from "./translations";

export type Locale = "fr" | "ar" | "en";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const stored =
      (typeof window !== "undefined" && (localStorage.getItem("pba-locale") as Locale)) || "fr";
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

  const t = useCallback(
    (key: string) => translations[locale][key] ?? translations.fr[key] ?? key,
    [locale],
  );

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx)
    return {
      locale: "fr" as Locale,
      setLocale: () => {},
      t: (k: string) => translations.fr[k] ?? k,
    };
  return ctx;
}
