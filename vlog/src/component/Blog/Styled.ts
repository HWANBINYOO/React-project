import styled from "styled-components";

export const Blog = styled.div`
  width: 100vw;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(3, minmax(200px, max-content)); */
  margin: 0 auto;
  overflow-y: scroll;

  /* & :nth-child(3) {
    grid-column: 1 / 2;
    grid-row: 3 / 5;
  }
  & :nth-child(4) {
    grid-column: 2 /3;
    grid-row: 4 / 6;
  } */
`;
