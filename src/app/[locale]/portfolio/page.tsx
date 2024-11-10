import ProjectsPage from "@/styles/pages/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Portfolio | Thiago Honorato Developer`,
  description: "Portfolio Thiago Honorato",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
