"use client";

import FooterLink from "@/components/Footer";
import Layout, { PageWrapper } from "@/components/Layout";
import { PageSection } from "@/components/Layout/styles";
import { Typography } from "@/components/Typography";
import useTranslation from "@/hooks/useTranslation";

export default function HomePage() {
  const { t, locale } = useTranslation();

  return (
    <Layout title="Home">
      <PageSection>
        <PageWrapper>
          <h1 data-text="Frontend +" className="intro__text sub__text">
            <mark className="mark">Frontend +</mark>
          </h1>
          <h1 data-text="Full-stack Developer" className="intro__text">
            <mark className="mark">Full-stack Developer</mark>
          </h1>
          <article>
            <Typography type="p">{t("homeDescription")}</Typography>
            <br />
            <FooterLink goto={`/${locale}/about`}>{t("homeFooter")}</FooterLink>
          </article>
        </PageWrapper>
      </PageSection>
    </Layout>
  );
}
