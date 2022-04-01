import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const HeaderMenu = styled.span`
  width: 5vw;
  height: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "LeeSeoyun";
  cursor: pointer;
  border-radius: 10px;

  font-size: 0.5rem;
  transition: all ease 0.5s 0s;
  // border-radius: 20%;

  &:hover {
    // background-color: ${(props: any) => props.backgroundColor};
    background-color: ${(props: any) => props.ProfileColor};
  }
`;
