import styled from "styled-components";

export const H1 = styled.h1<{
  color: string;
  height?: number;
  weight?: number;
}>`
  font-weight: 900;
  font-size: 2.775em;
  position: relative;
  margin: 4rem 0rem 1.5rem;
`;

export const H2 = styled.h2<{
  color: string;
  height?: number;
  weight?: number;
}>`
  color: ${(props) => props.color};
  font-size: 28px;
  font-style: normal;
  font-weight: ${(props) => (props.weight ? `${props.weight}` : "400")};
  line-height: ${(props) => (props.height ? `${props.height}px` : "normal")};
  margin: 0px;
  padding: 0px;
`;

export const H3 = styled.h3<{ color: string }>`
  color: ${(props) => props.color};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  margin: 0px;
  padding: 0px;
`;

export const P = styled.p<{ color: string; size: number }>`
  color: ${(props) => props.color};
  font-size: ${(props) => `${props.size}px`};
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  margin: 0px;
  padding: 0px;
`;

export const Label = styled.label<{ color: string; weight?: number }>`
  color: ${(props) => props.color};
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => (props.weight ? `${props.weight}` : "500")};
  line-height: 100%;
  margin: 0px !important;
  padding: 0px !important;
`;
