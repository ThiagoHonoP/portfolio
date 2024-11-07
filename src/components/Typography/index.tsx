import { H1, H2, H3, Label, P } from "./styles";

interface IProps {
  type: "h1" | "h2" | "h3" | "label" | "p";
  children: any;
  color?: string;
  htmlFor?: any;
  style?: any;
  size?: number;
  height?: number;
  weight?: number;
}

export const Typography = ({
  type,
  children,
  color = "#333E20",
  htmlFor,
  style,
  size = 14,
  height,
  weight,
  ...props
}: IProps) => {
  function CustomText() {
    if (type === "h1") {
      return (
        <H1 color={color} style={style} {...props}>
          {children}
        </H1>
      );
    }

    if (type === "h2") {
      return (
        <H2
          color={color}
          style={style}
          height={height}
          weight={weight}
          {...props}
        >
          {children}
        </H2>
      );
    }

    if (type === "h3") {
      return (
        <H3 color={color} style={style} {...props}>
          {children}
        </H3>
      );
    }

    if (type === "label") {
      return (
        <Label
          color={color}
          style={style}
          weight={weight}
          htmlFor={htmlFor}
          {...props}
        >
          {children}
        </Label>
      );
    }

    return (
      <P color={color} style={style} size={size} {...props}>
        {children}
      </P>
    );
  }

  return <CustomText />;
};
