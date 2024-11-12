"use client";
import { createContext, useEffect, useState } from "react";

export const defaultLocale = "pt";
export const locales = ["pt", "en"];

export const LanguageContext = createContext([] as any);

export function LanguageProvider({ children }: any) {
  const [locale, setLocale] = useState("pt");

  useEffect(() => {
    if (!window) {
      return;
    }

    const language = localStorage.getItem("lang") || locale;
    setLocale(language);
  }, [locale]);

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
}
