import styled from "styled-components";
type DisplayProps = {
  Imgdisplay?: string;
};
type ContentFontColorProps = {
  Imgdisplay: string;
  color: string;
  hoverColor: string;
  backColor: string;
  imgurl: string;
};

export const HomeWapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
`;

export const Content = styled.div<ContentFontColorProps>`
  height: 100%;
  width: 16.6666666667vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.Imgdisplay === "block" ? props.hoverColor : props.color};
  background-color: ${(props) => props.backColor};
  &:hover {
    background-image: url(${(props) => props.imgurl});
    background-size: 100%;
    background-size: cover;
  }
`;

export const Span = styled.span`
  z-index: 50;
  font-size: 1.6rem;
  font-weight: bold;
  position: relative;

  top: ${(props: DisplayProps) =>
    props.Imgdisplay === "block" ? "150px" : "0px"};
`;

// export const Img = styled.img`
//   position: absolute;
//   right: 0vw;
//   display: ${(props: DisplayProps) => props.Imgdisplay};
//   height: 90vh;
//   width: 16.6666666667vw;
// `;
