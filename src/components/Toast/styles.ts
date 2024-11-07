import styled from "styled-components";

export const MessageBoxStyle = styled.div`
  position: absolute;
  bottom: 40px;
  right: 0;
  transform: translate(-10%, -50%);
  background-color: var(--bg);
  color: #ffff !important;
  padding: 22px 30px 20px 44px;
  border-radius: 28px;
  z-index: 9999;
  text-align: center;
  box-shadow: 0px 1px 20px 0px #0e3947bd;
  .wrap {
    display: flex;
    align-items: center;
    .close-icon {
      margin-left: 30px;
      cursor: pointer;
    }
  }
`;
