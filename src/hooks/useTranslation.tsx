import {
  LanguageContext,
  defaultLocale,
  locales,
} from "@/contexts/LanguageContext";
import { LangStrings } from "@/lib/messages";
import { useContext } from "react";

export default function useTranslation() {
  const [locale, setLocale] = useContext(LanguageContext);

  function t(key: string) {
    if (!LangStrings[locale][key]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }
    return LangStrings[locale][key] || LangStrings[defaultLocale][key] || "";
  }

  return { t, locale, setLocale, locales };
}
