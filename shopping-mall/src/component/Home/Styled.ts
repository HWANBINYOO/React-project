import styled from "styled-components";

export const HomeWapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
`;

export const Content = styled.div`
  height: 100%;
  width: 16.6666666667vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: any) => (props.color ? props.color : "white")};
  font-weight: bold;
  background-color: ${(props: any) => props.backColor};
`;
