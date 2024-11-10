import { locales } from "@/contexts/LanguageContext";
import useTranslation from "@/hooks/useTranslation";
import AboutPage from "@/styles/pages/about";
import ContactPage from "@/styles/pages/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Sobre | Thiago Honorato Developer`,
  description: "Sobre Thiago Honorato",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function About() {
  return <AboutPage />;
}
