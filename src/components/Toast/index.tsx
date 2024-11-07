import { CloseToast } from "../Icons";
import { MessageBoxStyle } from "./styles";

interface IToast {
  children: React.ReactNode;
  close?: () => void;
}
const ToastNotification = ({ children, close }: IToast) => {
  return (
    <MessageBoxStyle>
      <div className="wrap">
        <p> {children} </p>
        <div
          className="
        close-icon"
          onClick={close}
        >
          <CloseToast />
        </div>
      </div>
    </MessageBoxStyle>
  );
};

export default ToastNotification;
