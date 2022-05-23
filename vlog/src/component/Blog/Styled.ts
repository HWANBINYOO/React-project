import styled from "styled-components";

type StyleProps = {
  color?: string;
};

export const Blog = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: scroll;
`;
export const BlogButtonBox = styled.div`
  width: max-content;
  height: max-content;
  position: fixed;
  right: 10vw;
  top: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  z-index: -10;
  width: 4rem;
  height: 1.3rem;
  background-color: ${(props) => props.color};
  outline: none;
  border-radius: 10px;
  border: none;
  font-size: 0.3rem;
`;

export const Img = styled.img`
  position: fixed;
  right: 34%;
  width: 500px;
`;
