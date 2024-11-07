"use client";
import { Montserrat } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import AppContext from "@/utils/context";
import { useState } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { clearState, loadState, saveState } from "@/utils/localstorage";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [show, setShow] = useState<boolean>(false);
  const [theme, setTheme] = useState(loadState());

  const handleOpen = () => {
    setShow(!show);
  };

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <html lang="pt-BR">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Thiago Honorato</title>
      </Head>
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <LanguageProvider>
            <AppContext.Provider
              value={{
                show,
                theme,
                toggleTheme,
                handleOpen,
              }}
            >
              {children}
            </AppContext.Provider>
          </LanguageProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
