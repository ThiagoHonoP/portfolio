import { locales } from "@/contexts/LanguageContext";
import useTranslation from "@/hooks/useTranslation";
import ContactPage from "@/styles/pages/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contato | Thiago Honorato Developer`,
  description: "Contato Thiago Honorato",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function Contact() {
  return <ContactPage />;
}
