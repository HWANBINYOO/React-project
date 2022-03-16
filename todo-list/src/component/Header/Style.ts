import styled from "styled-components";

export const Header = styled.div`
  font-family: "LeeSeoyun";

  width: 80%;
  height: 40vh;
  margin 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  // border: 0.5px black solid;

  p {
    font-size:5rem;
  }

  @media (max-width: 1366px) {
    height: 30vh;
    p{font-size: 4rem;}
  }
  @media (max-width: 1024px) {
    height: 25vh;
    p{font-size : 3.5rem;}
  }

  @media (max-width: 767px) {
    height: 20vh;
    p{font-size:2.5rem;}
  }
`;
