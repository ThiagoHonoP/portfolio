import styled, { css } from "styled-components";

interface CursorStyleProps {
  $cursorActive: boolean;
}

export const CursorStyle = styled.div<CursorStyleProps>`
  @media (min-width: 989px) {
    .cursor-dot,
    .cursor-dot-outline {
      pointer-events: none;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      opacity: 0;
      z-index: 9222;
      transform: translate(-50%, -50%);
      transition: opacity 0.2s ease-in-out, transform 0.5s ease-in-out;
    }

    .cursor-dot {
      width: 8px;
      height: 8px;
      box-shadow: inset 0 0 0px 0.5px var(--light-gray);
      background-color: var(--gray);
    }

    .cursor-dot-outline {
      width: 85px;
      height: 85px;
      border: 1px solid var(--gray);
      box-shadow: inset 0 0 0px 0.5px var(--light-gray);
    }

    ${({ $cursorActive }) =>
      $cursorActive
        ? css`
            .cursor-dot {
              transform: translate(-50%, -50%) scale(2.2);
              background: hsla(0, 0%, 100%, 0.3);
              border: 1px solid #fff;
            }

            .cursor-dot-outline {
              box-shadow: none;
              transform: translate(-50%, -50%) scale(0);
            }
          `
        : css`
            .cursor-dot {
              transform: translate(-50%, -50%) scale(1);
            }
            .cursor-dot-outline {
              transform: translate(-50%, -50%) scale(1);
            }
          `}
  }
`;
