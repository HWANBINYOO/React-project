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
  width: 850px;
  /* height: 100%; */
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(100px, auto));
  transition: all ease 0.2s 0s;

  /* border: 1px black solid; */
`;
export const Img = styled.img`
  width: 100%;
`;

export const GoLogin = styled.div`
  display: flex;
  gap: 20px;

  h2 {
    font-size: 2rem;
    transition: all ease 0.2s 0s;
  }
  h2:hover {
    color: gray;
  }
`;
