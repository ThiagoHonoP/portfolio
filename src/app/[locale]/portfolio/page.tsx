"use client";

import FooterLink from "@/components/Footer";
import Layout, { PageWrapper } from "@/components/Layout";
import { PageSection } from "@/components/Layout/styles";
import useTranslation from "@/hooks/useTranslation";
import {
  Grid,
  GridItem,
  MansoryItem,
  PortfolioSection,
} from "@/styles/pages/portfolio/styles";
import { Typography } from "@/components/Typography";
import { PORTFOLIO_DATA } from "@/components/AppData/portfolio";
import { useState } from "react";
export default function Projects() {
  const { t, locale } = useTranslation();
  const [data, setData] = useState(PORTFOLIO_DATA);

  return (
    <Layout>
      <PageSection>
        <PageWrapper>
          <PortfolioSection>
            <Typography type="h1"> {t("projects")}. </Typography>
            <Grid>
              {data &&
                data.map((item, index) => (
                  <GridItem key={index}>
                    <MansoryItem
                      style={{
                        height: `${
                          index === 0 || index === data.length - 1
                            ? "230px"
                            : ""
                        }`,
                      }}
                      role="gridcell"
                      id="cardHover"
                      tabIndex={0}
                    >
                      {/* <Image src={Proffy} alt="" /> */}

                      <div className="content__slate">
                        <h3> {item.title} </h3>
                        <p> {item.description} </p>

                        <p className="d-flex flex-wrap">
                          {item.technologies.map((tech, index) => (
                            <span key={index}>{tech}</span>
                          ))}
                        </p>
                      </div>
                    </MansoryItem>
                  </GridItem>
                ))}
            </Grid>

            <div>
              <FooterLink goto={`/${locale}/resume`}>
                {t("projectsFooter")}
              </FooterLink>
            </div>
          </PortfolioSection>
        </PageWrapper>
      </PageSection>
    </Layout>
  );
}
