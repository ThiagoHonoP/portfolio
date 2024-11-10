import HomePage from "@/styles/pages/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Home | Thiago Honorato Developer`,
  description: "Contato Thiago Honorato",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function Home() {
  return <HomePage />;
}
