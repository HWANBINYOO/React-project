import styled from "styled-components";

export const ProjectItem = styled.div`
  width: 90%;
  height: 300px;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const ProjectBox = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 2rem;
  }
  span {
    width: 50%;
  }
`;
