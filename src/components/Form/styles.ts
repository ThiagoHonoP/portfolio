import styled from "styled-components";

export const TextArea = styled.textarea`
  border: 1px solid var(--cw);
  border-radius: 5px;
  width: 100%;
  padding: 0.5rem;
  font-size: var(--font-sm);
  color: var(--cw);
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const Input = styled.input.attrs<{ $size?: string }>((props) => ({
  $size: props.$size || "1em",
}))`
  width: 100%;
  border-style: solid;
  background: transparent;
  color: var(--cw) !important;
  margin-bottom: 2rem;
  box-shadow: none !important;
  resize: none;
  padding: 24px 21px !important;
  border-color: var(--border-color);
  font-size: var(--font-sm);
`;
