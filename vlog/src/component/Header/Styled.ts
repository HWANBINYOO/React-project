import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const HeaderMenu = styled.span`
  width: 22vw;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "LeeSeoyun";
  cursor: pointer;
  font-size: 2.5rem;
  transition: all ease 0.5s 0s;
  // border-radius: 20%;

  &:hover {
    // background-color: ${(props: any) => props.backgroundColor};
    background-color: #fffbde;
  }
`;
