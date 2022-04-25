import styled from "styled-components";

export const About = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 30px;
`;

export const Intrudece = styled.div`
  width: 55%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 0 10vw;
  margin: 5% 0 10% 0;
  text-align: center;

  p {
    text-decoration: none;
    font-size: 2rem;
  }
`;

export const Img = styled.img`
  width: ${(props: any) => props.width};
`;

export const AboutContents = styled.div`
  width: 90vw;
  padding: 0 5vw;
  height: 2000px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 50px;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const AboutContent = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  justify-content: space-between;
`;

export const decs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 200px;
  margin: auto 0;
`;
