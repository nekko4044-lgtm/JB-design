"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, type Locale, type Translations } from "@/lib/i18n";

type LangContextType = {
  locale: Locale;
  t: Translations;
  toggle: () => void;
};

const LangContext = createContext<LangContextType>({
  locale: "en",
  t: translations.en,
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Locale | null;
    if (saved === "ru" || saved === "en") setLocale(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-locale", locale);
  }, [locale]);

  const toggle = () => {
    const next: Locale = locale === "en" ? "ru" : "en";
    setLocale(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LangContext.Provider value={{ locale, t: translations[locale], toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
