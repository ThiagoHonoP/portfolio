"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import AppContext from "@/utils/context";
import { useState } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { loadState } from "@/utils/localstorage";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [show, setShow] = useState<boolean>(true);
  const [theme, setTheme] = useState(loadState());

  const handleOpen = () => {
    setShow(!show);
  };

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
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
              <Analytics />
            </AppContext.Provider>
          </LanguageProvider>
        </StyledComponentsRegistry>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID!} />
    </html>
  );
}
