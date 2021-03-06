import styled from "styled-components";

export const ProjectItem = styled.div`
  width: 90%;
  height: 65vh;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Projectdesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Img = styled.img`
  width: 45%;
  margin: auto 0;
`;

export const ProjectBox = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.8rem;
  }
  span {
    width: 40%;
  }
`;
