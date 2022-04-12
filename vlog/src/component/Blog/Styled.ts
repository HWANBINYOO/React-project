import styled from "styled-components";

type StyleProps = {
  color?: string;
};

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
  width: max-content;
  height: max-content;

  position: fixed;
  left: 670px;
  top: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px black solid; */
  border-radius: 10%;
  z-index: 100;
  gap: 1px;
  transition: all ease 0.25s 0s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    background-color: #d3d3d3;
  }
`;

export const Button = styled.button<StyleProps>`
  /* display: none; */
  z-index: -10;
  width: 4rem;
  height: 1.3rem;
  background-color: ${(props) => props.color};
  outline: none;
  border-radius: 10px;
  /* border: 1px black solid; */
  border: none;
  font-size: 0.3rem;
`;
