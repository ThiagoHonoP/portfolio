"use client";
import FooterLink from "@/components/Footer";
import { Rocket } from "@/components/Icons";
import Layout, { PageWrapper } from "@/components/Layout";
import { PageSection } from "@/components/Layout/styles";
import { Typography } from "@/components/Typography";
import useTranslation from "@/hooks/useTranslation";
import { AboutSection } from "@/styles/pages/about/styles";
import Link from "next/link";

export default function Resume() {
  const { t, locale } = useTranslation();

  return (
    <Layout>
      <PageSection>
        <PageWrapper>
          <h1 data-text="Resume" className="intro__text">
            RESUME
          </h1>
          <article>
            <br />
            <FooterLink goto={`/${locale}/contact`}>
              {t("homeFooter")}
            </FooterLink>
          </article>
        </PageWrapper>
      </PageSection>
    </Layout>
  );
}
