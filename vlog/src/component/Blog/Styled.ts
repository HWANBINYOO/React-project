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

export const BlogButtonBox = styled.div`
  width: 90%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const Button = styled.button`
  width: 4rem;
  height: 1.3rem;
  background-color: white;
  border-radius: 5px;
  outline: none;
  /* border: 1px black solid; */
  border: none;
  font-size: 0.5rem;
`;
