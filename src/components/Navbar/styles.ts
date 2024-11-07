import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  max-width: 1150px;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  button {
    display: none !important;
    @media (max-width: 992px) {
      display: block !important;
    }
  }
  .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    width: 100%;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 576px) {
    max-width: 540px;
  }
`;

export const Header = styled.header`
  padding: 40px 0;
  .nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
  }

  .nav-link:focus,
  .nav-link:hover {
    text-decoration: none;
  }

  .nav-link.disabled {
    color: #6c757d;
    pointer-events: none;
    cursor: default;
  }

  .navbar {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  .navbar-brand:focus,
  .navbar-brand:hover {
    text-decoration: none;
  }

  .navbar-nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
  }

  .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }

  .navbar-collapse {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-align: center;
    align-items: center;
  }

  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background: transparent !important;
  }

  .navbar-toggler:focus,
  .navbar-toggler:hover {
    text-decoration: none;
  }

  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
  }

  @media (max-width: 991.98px) {
    .navbar-expand-lg > .container,
    .navbar-expand-lg > .container-fluid {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 992px) {
    .navbar-expand-lg {
      -ms-flex-flow: row nowrap;
      flex-flow: row nowrap;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }

    .navbar-expand-lg .navbar-nav {
      -ms-flex-direction: row;
      flex-direction: row;
    }

    .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
    }

    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    .navbar-expand-lg > .container,
    .navbar-expand-lg > .container-fluid {
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
    }

    .navbar-expand-lg .navbar-collapse {
      display: -ms-flexbox !important;
      display: flex !important;
      -ms-flex-preferred-size: auto;
      flex-basis: auto;
    }

    .navbar-expand-lg .navbar-toggler {
      display: none;
    }
  }

  nav {
    display: flex;
    width: 100%;
    margin: auto;
    max-width: 1140px;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 992px) {
      flex-direction: row;
    }
    .nav-link {
      color: var(--nav-link) !important;
      svg {
        cursor: pointer;
      }
    }

    .navbar-brand {
      svg {
        .fill-logo {
          fill: var(--logo-bg);
        }
      }
    }

    .navbar-nav {
      width: 100%;
      color: #fff;
      display: flex;
      justify-content: flex-end;
      @media (min-width: 992px) {
        display: flex !important;
        align-items: center;
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
    &-icon {
      filter: ${(props) => (props.theme ? "invert(1)" : "invert(0)")};
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
      -webkit-transition-property: left, right;
      transition-property: left, right;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
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
    display: block;
  }

  .navbar-border-collapse.false {
  }

  @media (max-width: 992px) {
    padding: 20px 0 0;

    .navbar-brand {
      svg {
        width: 70px;
        margin-left: 10px;
      }
    }
    .navbar-collapse {
      position: fixed;
      z-index: 9999;
      width: 100%;
      height: 100%;
      transition: all 1s ease;
      left: 0;
      bottom: 0;
      animation-name: opacitys;
      animation-duration: 1s;
      background: var(--bg) !important;
      button {
        display: block;
      }
      .nav-svg,
      .close-nav {
        position: absolute;
        right: 60px;
        top: 60px;
        border: none;
        width: fit-content;
        cursor: pointer;
        background-color: transparent;
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
            text-transform: uppercase;
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

export const NavLang = styled.div`
  ul {
    display: flex;
    list-style: none;
    li {
      a {
        padding: 4px 12px !important;
      }
      &:first-child {
        border-right: 1px solid var(--cw);
      }
    }
  }
`;
