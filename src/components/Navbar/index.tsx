"use client";
import React, { useContext, useState } from "react";
import { Logo, Moon, Icon, MenuMobile } from "../Icons";
import Link from "next/link";
import AppContext from "@/utils/context";
import { Header, NavContainer, NavLang } from "./styles";
import useTranslation from "@/hooks/useTranslation";
import { locales } from "@/contexts/LanguageContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { theme, show, handleOpen, toggleTheme, setTheme, closeShow } =
    useContext(AppContext);
  const {
    t,
    locale,
    setLocale,
  }: { t: Function; locale: string; setLocale: Function } = useTranslation();

  const [active, setActive] = useState<number>(locale === "pt" ? 0 : 1);
  const url = usePathname();

  const handleLocaleChange = async (locale: string, index: number) => {
    setLocale(locale);
    setActive(index);
  };

  return (
    <Header>
      <nav className="navbar navbar-expand-lg">
        <NavContainer>
          <Link
            href="/"
            className="navbar-brand"
            aria-label="Thiago Honorato Home"
          >
            <Logo />
          </Link>

          <button
            type="button"
            className="navbar-toggler"
            onClick={handleOpen}
            tabIndex={show ? -1 : undefined}
            aria-label="Open Button Toggle"
          >
            <MenuMobile />
          </button>

          <div
            className={`collapse navbar-collapse`}
            id="collapsibleNavbar"
            style={{ display: `${show ? "none" : "flex"}` }}
          >
            <button className="close-nav" onClick={handleOpen} type="button">
              <Icon />
            </button>

            <ul
              className="navbar-nav"
              style={{ display: `${show ? "none" : "flex"}` }}
            >
              <li className="nav-item hover__bottom">
                <Link
                  href="/"
                  onClick={handleOpen}
                  className="nav-link"
                  aria-label="Go Home"
                  title={t("home")}
                >
                  {t("home")}
                </Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link
                  onClick={handleOpen}
                  href={`/${locale}/about`}
                  className="nav-link"
                  aria-label="Go To Projects Page"
                  title={t("about")}
                >
                  {t("about")}
                </Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link
                  onClick={handleOpen}
                  href={`/${locale}/portfolio`}
                  className="nav-link"
                  aria-label="Go To Projects Page"
                  title={t("projects")}
                >
                  {t("projects")}
                </Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link
                  onClick={handleOpen}
                  href={`/${locale}/contact`}
                  className="nav-link"
                  aria-label="Go To Contacts Page"
                  title={t("contact")}
                >
                  {t("contact")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="#!"
                  className="nav-link nav-svg"
                  aria-label={`Turn On ${
                    theme === false ? "Light" : "Dark"
                  } Mood`}
                  onClick={toggleTheme}
                >
                  <Moon />
                </Link>
              </li>
              <li>
                <NavLang>
                  <ul>
                    {locales.map((locale, index) => (
                      <li
                        key={index}
                        style={{
                          fontWeight: index === active ? "bold" : "100",
                        }}
                        onClick={() => handleLocaleChange(locale, index)}
                      >
                        <Link
                          href={`${url.replace(
                            locale === "en" ? "pt" : "en",
                            locale
                          )}`}
                          className="nav-link"
                          aria-label="Go To Contacts Page"
                          onClick={() => handleLocaleChange(locale, index)}
                        >
                          {locale.toUpperCase()}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavLang>
              </li>
            </ul>
          </div>
        </NavContainer>
      </nav>
    </Header>
  );
};

export default Navbar;
