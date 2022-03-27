import styled from "styled-components";

export const Home = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HelloPickture = styled.img``;

export const Intrudece = styled.div`
  width: 80vw;
  height: 15vh;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    text-decoration: none;
    font-size: 2rem;
  }
`;

export const InputBox = styled.input`
  outline: none;
  border: none;
  width: 10rem;
  height: 12vh;
`;
