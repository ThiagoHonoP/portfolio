"use client";
import FooterLink from "@/components/Footer";
import Layout, { PageWrapper } from "@/components/Layout";
import { PageSection } from "@/components/Layout/styles";
import { RocketAbout } from "@/components/RocketAbout";
import { Typography } from "@/components/Typography";
import useTranslation from "@/hooks/useTranslation";
import { AboutSection } from "@/styles/pages/about/styles";
import Link from "next/link";

const stack = {
  fullStack: [
    "Nodejs",
    "Typescript",
    "Rest API",
    "Nestjs",
    "Expressjs",
    "Postgress",
    "Mongodb",
    "AWS",
    "GraphQL",
    "Apollo server",
  ],
  frontEnd: [
    "Reactjs",
    "Nextjs",
    "Tailwind",
    "Styled-Component",
    "React Native",
    "Flutter",
    "Storybook",
    "GraphQL",
    "Apollo client",
  ],
  webDesigner: [
    "Figma",
    "Adobe XD",
    "Photoshop",
    "Illustrator",
    "Indesign",
    "html / css",
  ],
};
const AboutPage = () => {
  const { t, locale } = useTranslation();

  return (
    <Layout>
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <AboutSection>
            <Typography type="h1"> {t("about")}. </Typography>
            <RocketAbout />
            <article>
              <ul className="timeline">
                <li>
                  <Link href="#" aria-label="Open Products Page">
                    Full Stack Jr
                  </Link>
                  <Typography type="p">
                    <Typography type="p">{t("aboutFullStack")}</Typography>
                  </Typography>
                  <Typography type="p">
                    {t("technologies")}:{" "}
                    {stack.fullStack.map((tech, index) => (
                      <span key={index} style={{ fontStyle: "italic" }}>
                        {`${tech}, `}
                      </span>
                    ))}
                  </Typography>
                </li>
                <li>
                  <Link href="#" aria-label="Open Products Page">
                    Front-End
                  </Link>
                  <Typography type="p">{t("aboutFrontEnd")}</Typography>
                  <Typography type="p">
                    {t("technologies")}:{" "}
                    {stack.frontEnd.map((tech, index) => (
                      <span key={index} style={{ fontStyle: "italic" }}>
                        {`${tech}, `}
                      </span>
                    ))}
                  </Typography>
                </li>

                <li>
                  <Link href="#" aria-label="Open Products Page">
                    Web Designer
                  </Link>
                  <Typography type="p"> {t("aboutWebDesigner")} </Typography>
                  <Typography type="p">
                    {t("technologies")}:{" "}
                    {stack.webDesigner.map((tech, index) => (
                      <span key={index} style={{ fontStyle: "italic" }}>
                        {`${tech}, `}
                      </span>
                    ))}
                  </Typography>
                </li>
              </ul>
            </article>
          </AboutSection>
          <FooterLink goto={`/${locale}/portfolio`}>
            {t("aboutFooter")}
          </FooterLink>
          <br />
        </PageWrapper>
      </PageSection>
    </Layout>
  );
};

export default AboutPage;
