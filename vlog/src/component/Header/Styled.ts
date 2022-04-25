import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const HeaderMenu = styled.span`
  width: 150px;
  height: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: 10px;

  font-size: 1rem;
  transition: all ease 0.5s 0s;
  // border-radius: 20%;

  &:hover {
    background-color: ${(props: any) => props.ProfileColor};
  }
`;
