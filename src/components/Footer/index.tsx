import React from "react";
import Link from "next/link";

import { IconRight, Linkedin, Github, Discord, WhatsApp } from "../Icons";
import { SocialMedia } from "../Layout/styles";
import { FooterStyle } from "./styles";

interface IFooterLink {
  children: string | React.ReactNode;
  goto?: string;
}

const FooterLink: React.FC<
  IFooterLink & React.AnchorHTMLAttributes<HTMLParagraphElement>
> = ({ children, goto, ...rest }) => {
  return (
    <>
      <FooterStyle>
        <Link href={`${goto}`}>
          <p {...rest}>
            {children}
            <IconRight />
          </p>
        </Link>
      </FooterStyle>
      <SocialMedia>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/thiago-honorato-pedrosa/"
          aria-label="Go To Thiago Honorato Linkedin Page"
          title="Linkedin Page"
        >
          <Linkedin />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ThiagoHonoP"
          aria-label="Go To Thiago Honorato Github Page"
          title="Github Page"
        >
          <Github />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ThiagoHonoP"
          aria-label=" Twitter Page"
          title="Twitter Page"
        >
          <Discord />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/5511987072289"
          aria-label="Go To WhatsApp"
          title="WhatsApp"
        >
          <WhatsApp />
        </a>
      </SocialMedia>
    </>
  );
};

export default FooterLink;
