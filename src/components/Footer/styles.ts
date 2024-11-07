import styled from "styled-components";

export const FooterStyle = styled.footer`
  p {
    font-size: var(--font-sm);
    transition: all 1s ease;
    display: flex;
    align-items: center;
    svg {
      margin-left: 1rem;
      animation-name: forward;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }

    &:hover {
      @keyframes forward {
        from {
          margin-left: 1rem;
        }
        to {
          margin-left: 2rem;
        }
      }
    }
  }
`;
