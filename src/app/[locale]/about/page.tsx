import AboutPage from "@/styles/pages/about";
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
