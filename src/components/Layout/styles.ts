import styled, { createGlobalStyle, css } from "styled-components";

export const BackLay = styled.div`
  margin: 0;

  @media (max-width: 992px) {
    display: none;
  }
  h1 {
    white-space: pre;
    color: var(--mark);
    position: fixed;
    left: -2rem;
    opacity: 1;
    z-index: -1;
    bottom: 0px;

    svg {
      opacity: 0.03;
    }
  }
`;

export const SocialMedia = styled.div`
  background: transparent;
  padding: 1rem 0;
  a {
    transition: all 1s ease;
    cursor: pointer;
    padding: 0 12px;
    &:first-child {
      padding-left: 0;
    }
  }
  svg {
    cursor: pointer;
    height: 15px;
    fill: var(--article-color);
    transition: all 1s ease;
    &:hover {
      stroke: var(--article-color);
      stroke-width: 1px;
      stroke-opacity: 0.8;
    }
  }
  @media (max-width: 992px) {
    position: fixed;
    backdrop-filter: blur(6px) saturate(2.5);
    background: var(--gray-alpha) !important;
    width: 100% !important;
    display: flex;
    padding: 0 !important;
    right: 0;
    z-index: 999;
    flex-direction: row !important;
    height: 60px !important;
    bottom: 0px !important;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const Main = styled.main`
  &:before {
    background: #1b1b1b;
    content: "";
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(currentColor 1px, transparent 1px),
      linear-gradient(to right, currentColor 1px, transparent 1px);
    background-size: 94px 90px;
    color: rgb(113 113 113 / 7%);
    position: fixed;
    z-index: -1;

    background-color: transparent;
    transition: all 0.5s linear;
  }

  &:after {
    background-image: radial-gradient(at 40% 40%, #1e90ff 0, transparent 50%),
      radial-gradient(at 90% 10%, #ff69b4 0, transparent 50%),
      radial-gradient(at 50% 95%, #00ffff 0, transparent 50%),
      radial-gradient(at 20% 30%, #32cd32 0, transparent 50%),
      radial-gradient(at 90% 90%, #ffff00 0, transparent 50%),
      radial-gradient(at 33% 50%, #ff4500 0, transparent 50%),
      radial-gradient(at 79% 53%, #800080 0, transparent 50%);
    position: fixed;
    content: "";
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: blur(100px) saturate(100%);
    top: 0px;
    opacity: 0.1;
    transform: translateZ(0);
  }
`;

const LightTheme = css`
  :root {
    --bg: #fffdfc;
    --logo-bg: #000;
    --button-index: #f4f1ee;
    --cw: #262626;
    --invert: 0;
    --mark: #f9f7f6;
    --theme-amount: 0;
    --gray: #d6d6d6;
    --pattern: #f8f7f7;
    --light-gray: #dedede;
    --lighter-gray: #f5f5f5;
    --article-color: #545454;
    --header-bg: rgba(255, 255, 255, 0.8);
    --token: #666;
    --border-color: #eaeaea;
    --sidebar-tag: #efe9e4;
    --gray-alpha: #f6f4f06b;
    --sidebar-cta: #0b0c15;
    --nav-link: rgba(0, 0, 0, 0.5);
    --timeline: #e0e0e0;
  }
`;

const DarkTheme = css`
  :root {
    --bg: #020a13;
    --logo-bg: #fff;
    --invert: 1;
    --theme-amount: 1;
    --cw: #e1e1e1;
    --gray: #9e9e9c;
    --pattern: transparent;
    --light-gray: #444;
    --lighter-gray: #222;
    --article-color: #c6c6c6;
    --header-bg: rgba(19, 20, 21, 0.8);
    --token: #999;
    --border-color: #14202b;
    --button-index: #091521;
    --mark: #080f18;
    --sidebar-tag: #13283e;
    --sidebar-cta: #3f566e;
    --gray-alpha: #07121dd4;
    --timeline: #ffffff5e;
    --nav-link: rgba(255, 255, 255, 0.8);
  }
`;

export const BodyStyling = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}


 ${(props) => {
   return props.theme ? LightTheme : DarkTheme;
 }} 

::placeholder { color: #c5c5c5 !important; font-weight: 300 !important }

::selection {
  background: var(--token);
  color: #fff;
}

::-moz-selection {
  background: var(--token);
  color: #fff;
}

::-webkit-input-placeholder {
  color: var(--light-gray);
  opacity: 1;
}

:-moz-placeholder {
  color: var(--light-gray);
  opacity: 1;
}
:-ms-input-placeholder {
  color: var(--light-gray);
  opacity: 1;
}


body {
  background: var(--bg) !important;
  padding-right: 0px !important;
  font-family: 'Inter', sans-serif;
  margin:0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing: antialiased;
}

html{
    scroll-behavior: smooth;
    -ms-text-size-adjust:100%;
    -webkit-text-size-adjust:100%
}

svg{
  fill: var(--article-color);
  
  &.logo__section{
    path{
      fill: var(--cw);
    }
  }
}

a, h1, h2, h3, h4, h5, h6, p, button, input[type=text], input[type=date], input[type=password], input[type=value], b, label, td, select, textarea, th {
  font-family: 'Inter', sans-serif;
  text-rendering: geometricPrecision;
  color: var(--cw);
}

:focus {
  outline-color:var(--cw) !important;
}

a {
  cursor: pointer;
}

mark.mark {
  color: inherit;
  padding: 0;
  background: none;
  background-repeat: no-repeat;
  background-size: 0% .3em;
  background-position: 0 80%;
  position: relative;
  background-size: 100% .3em;
}
`;

export const PageSection = styled.div`
  min-height: calc(61vh);
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 100%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
  }
  .sub__text {
    margin-bottom: 0rem !important;
  }
  .intro__text {
    text-transform: uppercase;
    font-size: 2.275em;
    font-weight: 500;
    margin: 0.8rem 0rem 1.5rem;
    position: relative;
    font-weight: 600;
    letter-spacing: 9.9px;
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-weight: 600;
    }

    &::before {
      left: 2px;
      text-shadow: -1px 0 #00ffff;
      animation: noise-anim-2 15s infinite linear alternate-reverse;
    }

    &::after {
      left: -2px;
      text-shadow: 3px 0 #ff69b4;
      animation: noise-anim 2s infinite linear alternate-reverse;
    }

    @keyframes noise-anim {
      0% {
        clip-path: inset(29% 0 25% 0);
      }
      5% {
        clip-path: inset(9% 0 38% 0);
      }
      10% {
        clip-path: inset(96% 0 1% 0);
      }
      15% {
        clip-path: inset(75% 0 23% 0);
      }
      20% {
        clip-path: inset(46% 0 50% 0);
      }
      25% {
        clip-path: inset(3% 0 46% 0);
      }
      30% {
        clip-path: inset(82% 0 2% 0);
      }
      35% {
        clip-path: inset(88% 0 1% 0);
      }
      40% {
        clip-path: inset(91% 0 8% 0);
      }
      45% {
        clip-path: inset(96% 0 2% 0);
      }
      50% {
        clip-path: inset(59% 0 38% 0);
      }
      55% {
        clip-path: inset(41% 0 53% 0);
      }
      60% {
        clip-path: inset(21% 0 47% 0);
      }
      65% {
        clip-path: inset(89% 0 4% 0);
      }
      70% {
        clip-path: inset(1% 0 95% 0);
      }
      75% {
        clip-path: inset(86% 0 4% 0);
      }
      80% {
        clip-path: inset(95% 0 5% 0);
      }
      85% {
        clip-path: inset(54% 0 36% 0);
      }
      90% {
        clip-path: inset(70% 0 27% 0);
      }
      95% {
        clip-path: inset(6% 0 16% 0);
      }
      100% {
        clip-path: inset(95% 0 2% 0);
      }
    }
    @keyframes noise-anim-2 {
      0% {
        clip-path: inset(76% 0 21% 0);
      }
      5% {
        clip-path: inset(54% 0 7% 0);
      }
      10% {
        clip-path: inset(55% 0 29% 0);
      }
      15% {
        clip-path: inset(89% 0 3% 0);
      }
      20% {
        clip-path: inset(33% 0 40% 0);
      }
      25% {
        clip-path: inset(17% 0 56% 0);
      }
      30% {
        clip-path: inset(37% 0 51% 0);
      }
      35% {
        clip-path: inset(38% 0 19% 0);
      }
      40% {
        clip-path: inset(93% 0 4% 0);
      }
      45% {
        clip-path: inset(44% 0 14% 0);
      }
      50% {
        clip-path: inset(53% 0 26% 0);
      }
      55% {
        clip-path: inset(67% 0 11% 0);
      }
      60% {
        clip-path: inset(85% 0 13% 0);
      }
      65% {
        clip-path: inset(27% 0 37% 0);
      }
      70% {
        clip-path: inset(87% 0 4% 0);
      }
      75% {
        clip-path: inset(10% 0 8% 0);
      }
      80% {
        clip-path: inset(51% 0 27% 0);
      }
      85% {
        clip-path: inset(10% 0 60% 0);
      }
      90% {
        clip-path: inset(83% 0 3% 0);
      }
      95% {
        clip-path: inset(23% 0 55% 0);
      }
      100% {
        clip-path: inset(1% 0 81% 0);
      }
    }
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    line-height: 2.3;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  a,
  button {
    font-size: calc(var(--font-sm) + 0.9px);
    line-height: 20px;
    position: relative;
    border: none;
    background: transparent;
  }

  button {
    font-size: var(--font-sm);
    background: var(--button-index);
    border: none;
    border-radius: 5px;
    transition: all 0.4s ease;
    padding: 1px 12px;
    &:hover {
      background: ${(props) => props.color};
      color: #fff;
    }
  }
  @media (max-width: 585px) {
    display: block;
    min-height: 100%;
    font-size: 14px;
    margin-top: 50px;
    p {
      font-size: var(--font-sm);
    }
  }
  @media (max-width: 989px) {
    display: block;
  }
  @media (max-width: 220px) {
    display: block;
    min-height: 100%;
  }
  @media (prefers-reduced-motion: reduce) {
    .intro__text {
      animation: none;

      &::before,
      &::after {
        content: none;
      }
    }
  }
`;

export const Header = styled.header`
  transition: all 0.5s ease;
  nav {
    background: transparent !important;
    .nav-link {
      color: var(--nav-link) !important;
      svg {
        cursor: pointer;
      }
    }

    .navbar-brand {
      svg {
        path {
          fill: var(--article-color);
        }
      }
    }

    .navbar-nav {
      @media (max-width: 992px) {
        display: block !important;
        overflow: auto;
      }
    }
  }

  #nav {
    transition: all 0.5s ease;

    &.fixed-top {
      position: fixed;
      top: 0;
      background: var(--gray-alpha) !important;
      right: 0;
      left: 0;
      padding: 15px 19px;
      z-index: 1030;
    }
  }

  .navbar-toggler {
    color: rgba(255, 255, 255, 0.5);
    border-color: transparent;
    &-icon {
      filter: ${(props) => (props.theme ? "invert(1)" : "invert(0)")};
      filter: invert(var(--theme-amount));
    }
  }

  .nav-item.hover__bottom {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;

    @media (max-width: 992px) {
      display: block;
      text-align: center;
      width: fit-content;
      margin: 3rem auto;
    }

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 51%;
      right: 51%;
      bottom: 1.5px;
      background: var(--article-color);
      height: 1px;
      transition-property: left, right;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;
    }
    &:hover:before,
    &:focus:before,
    &:active:before {
      left: 0;
      right: 0;
    }
  }

  .nav-item > a {
    padding: 8px 15px !important;
    font-size: calc(var(--font-sm) + 0.9px);
    cursor: pointer;
  }

  #collapsibleNavbar .is-active {
    font-weight: 900;
    border-bottom: 1px solid var(--cw);
    color: var(--cw) !important;
    @media (min-width: 992px) {
      display: none;
    }
  }

  .navbar-border-collapse.show {
    background: red;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 99;
    height: 84vh;
  }

  @media (max-width: 762px) {
    padding: 20px 0 0;
    .navbar-brand {
      svg {
        width: 30px;
      }
    }
    .navbar-collapse {
      background: var(--bg);
      position: fixed;
      z-index: 9999;
      width: 100%;
      transition: all 1s ease;
      left: 0;
      bottom: 0;
      animation-name: opacitys;
      animation-duration: 1s;
      height: 100%;
      .nav-svg,
      .close-nav {
        position: absolute;
        right: 60px;
        top: 60px;
        border: none;
        background: transparent;
        width: fit-content;
        cursor: pointer;
      }
      ul {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        li {
          margin-bottom: 2rem;
          .nav-link {
            font-size: calc(var(--font-md) + 1.8px);
            font-weight: 800;

            @media (max-width: 992px) {
              &:focus {
                border: 1px solid var(--cw);
              }
            }
          }
          .nav-svg {
            left: 60px !important;
          }
        }
      }
    }
    @keyframes opacity {
      from {
        opacity: 0.5;
      }
      from {
        opacity: 1;
      }
    }
  }
`;
