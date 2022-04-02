import styled from "styled-components";

export const About = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  overflow-y: scroll;
  flex: 1;
  gap: 30px;
  /* background-color: black; */
`;

export const Intrudece = styled.div`
  width: 55%;
  height: 300px;
  /* border: 1px solid black; */
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
  // background-color: ${(props: any) => props.backgroundColor};
  width: ${(props: any) => props.width};
`;

export const AboutContents = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

export const AboutContent = styled.div`
  width: 65%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const decs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 80%;
  margin: auto 0;
`;
