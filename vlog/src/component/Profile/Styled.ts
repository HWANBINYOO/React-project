import styled from "styled-components";

export const Protile = styled.div`
  width: 75vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  /* background-color: black; */
  /* border: 1px black solid; */
`;

export const Content = styled.div`
  width: 55vw;
  height: 15vh;
  border: 3px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10vw;

  p {
    text-decoration: none;
    font-size: 2rem;
  }
`;
