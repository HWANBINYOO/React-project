import styled from "styled-components";

export const Home = styled.div`
  width: 90%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  /* background-color: black; */
`;

export const HelloPickture = styled.div`
  width: 75vw;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px black solid;

  img {
    border: 1px black solid;
    border-radius: 50%;
    width: 250px;
    height: 250px;
  }
`;

export const Intrudece = styled.div`
  width: 55vw;
  height: 15vh;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10vw;

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
