import { ContainerStyle } from "./styles";

type IContainer = {
  children?: React.ReactNode;
};

const Container = ({ children }: IContainer) => {
  return (
    <ContainerStyle>
      <div className="container"> {children}</div>
    </ContainerStyle>
  );
};

export default Container;
