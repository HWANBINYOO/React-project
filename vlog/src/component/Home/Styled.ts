import styled from "styled-components";

export const Home = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const HelloPickture = styled.div`
  width: 40vw;
  display: grid;
  height: 60vh;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, minmax(100px, auto));
  transition: all ease 0.2s 0s;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const GoLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  gap: 20px;

  h2 {
    font-size: 2rem;
    transition: all ease 0.2s 0s;
    line-height: 0.8;
    background-image: linear-gradient(transparent 60%, #e2b9ff 40%);
    background-repeat: no-repeat;
    background-size: 0% 100%;
  }
  h2:hover {
    background-size: 100% 100%;
  }
`;
