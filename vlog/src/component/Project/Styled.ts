import styled from "styled-components";

export const Project = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  overflow-y: scroll;
  /* background-color: black; */
`;

export const ProjectTitle = styled.p`
  font-size: 1.5rem;
`;

export const myProject = styled.div`
  margin: auto 0;
`;

export const Img = styled.img`
  // background-color: ${(props: any) => props.backgroundColor};
  width: ${(props: any) => props.width};
`;
