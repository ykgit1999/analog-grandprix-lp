"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Locale = "ja" | "en" | "zh";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (ja: string, en: string, zh: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  locale: "ja",
  setLocale: () => {},
  t: (ja) => ja,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ja");

  const t = (ja: string, en: string, zh: string) => {
    if (locale === "en") return en;
    if (locale === "zh") return zh;
    return ja;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
