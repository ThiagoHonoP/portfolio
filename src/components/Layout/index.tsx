import Head from "next/head";
import { PropsWithChildren, useContext } from "react";
import { BackLay, BodyStyling, Main } from "./styles";
import AppContext from "@/utils/context";
import Container from "../Container";
import Cursor from "../Cursor";
import Navbar from "../Navbar";
import Template from "../Transition";
import { LogoBackground } from "../Icons";

const Layout: React.FC<
  PropsWithChildren<{
    title?: string;
  }>
> = ({ children, title = "Home" }) => {
  const { theme } = useContext(AppContext);

  return (
    <Template>
      <Main>
        <BodyStyling theme={theme} />
        <Navbar />

        <BackLay title={title}>
          <h1 aria-hidden="true">
            <LogoBackground />
          </h1>
        </BackLay>
        <Cursor />
        <>{children}</>
      </Main>
    </Template>
  );
};

export const PageWrapper: React.FC<
  PropsWithChildren<{}> & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className = "", ...rest }) => {
  return (
    <Container>
      <div>
        <div>{children}</div>
      </div>
    </Container>
  );
};

export default Layout;
