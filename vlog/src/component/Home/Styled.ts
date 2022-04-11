import styled from "styled-components";

export const Home = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* overflow-y: scroll; */
`;

export const HelloPickture = styled.div`
  width: 85%;
  /* height: 100%; */
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(100px, auto));
  transition: all ease 0.2s 0s;

  /* border: 1px black solid; */
  &:hover {
    opacity: 0.9;
  }
`;
export const Img = styled.img`
  width: 100%;
  /* cursor: grab; */
`;

export const GoLogin = styled.div`
  display: flex;
  gap: 20px;
`;
