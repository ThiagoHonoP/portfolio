import styled from "styled-components";

export const Tag = styled.span`
  font-weight: bold;
`;

export const AboutSection = styled.div`
  .intro__text {
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
    text-transform: uppercase;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: " ";
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 2px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin-bottom: 3rem;
      padding-left: 20px;
      &:before {
        content: " ";
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        z-index: 400;
      }
      a {
        font-weight: bold;
        font-size: var(--font-md);
        color: var(--cw);
        span {
          font-weight: 600;
        }
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 58px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;
