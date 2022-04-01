import styled from "styled-components";

export const Home = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border: 1px black solid;
  overflow-y: scroll;
  /* background-color: black; */
`;

export const HelloPickture = styled.div`
  width: 100%;
  /* height: 100%; */
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(100px, auto));

  /* border: 1px black solid; */
`;
export const Img = styled.img`
  width: 100%;
`;
