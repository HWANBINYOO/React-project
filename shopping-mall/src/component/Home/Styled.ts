import styled from "styled-components";

type ColorProps = {
  color?: string;
};
type BackColorProps = {
  backColor: string;
};
type DisplayProps = {
  Imgdisplay?: string;
};

export const HomeWapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
  width: 16.6666666667vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props: BackColorProps) => props.backColor};
  color: ${(props: ColorProps) => (props.color ? props.color : "white")};
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Img = styled.img`
  position: absolute;
  right: 0vw;
  display: ${(props: DisplayProps) => props.Imgdisplay};
  height: 90vh;
  width: 16.6666666667vw;
`;
