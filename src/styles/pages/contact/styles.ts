import styled from "styled-components";

export const ContactSection = styled.div`
  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    border-radius: 0.25rem;
  }
  input,
  textarea {
    border-style: solid;
    background: transparent;
    color: var(--cw) !important;
    margin-bottom: 2rem;
    box-shadow: none !important;
    resize: none;
    padding: 24px 21px !important;
    border-color: var(--border-color);
    width: 100%;
    &:focus {
      background-color: var(--bg);
    }
    &:focus-visible {
      outline: 0;
      border: none;
    }
    &::placeholder {
      color: var(--light-gray);
      opacity: 1;
    }
  }
  input {
    height: calc(1.5em + 0.75rem + 2px);
  }
  button {
    font-size: calc(var(--font-sm) + 1.1px);
    background: var(--cw);
    border: none;
    color: var(--bg);
    border-radius: 5px;
    padding: 15px 40px;
    margin-bottom: 3rem;
  }
  form {
    width: 60%;
  }
  @media (max-width: 585px) {
    form {
      width: 100% !important;
    }
  }
  @media (max-width: 989px) {
    form {
      width: 100% !important;
    }
  }
  @media (max-width: 220px) {
    form {
      width: 100% !important;
    }
  }
`;
