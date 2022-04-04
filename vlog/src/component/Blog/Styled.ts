import styled from "styled-components";

export const Blog = styled.div`
  width: 100vw;
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(3, minmax(200px, max-content)); */
  margin: 0 auto;
  overflow-y: scroll;
`;
