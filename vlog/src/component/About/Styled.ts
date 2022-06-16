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

  &::-webkit-scrollbar {
    width: 12px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 20%; /* 스크롤바의 길이 */
    background: #c8abc5; /* 스크롤바의 색상 */

    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e4d4e2; /*스크롤바 뒷 배경 색상*/
  }
`;

export const Intrudece = styled.div`
  width: 55%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  padding: 0 10vw;
  margin: 5% 0;
  text-align: center;

  p {
    text-decoration: none;
    font-size: 2rem;
  }
`;

export const Intrudece2 = styled.div`
  width: 85%;
  height: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  text-align: center;
  padding: 50px 0;

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
  padding: 3rem 5vw;
  height: 2500px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 50px;
  justify-content: space-around;
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
