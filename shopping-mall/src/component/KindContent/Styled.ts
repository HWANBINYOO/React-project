import styled from "styled-components";

export const KindWapper = styled.div`
  position: absolute;
  right: 0;
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const KindHeader = styled.div`
  width: 100%;
  height: 10vh;
  background-color: black;
`;

export const KindContents = styled.div`
  width: 60vw;
  padding: 0 10vw;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
`;
