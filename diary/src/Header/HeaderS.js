import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  
  width: 90%;
  height: 10vh;
  margin 0 auto;

  // border: 2px black solid;
`;

export const Hright = styled.div`
  font-size: 2rem;
  width: 50%;
  display: flex;
  align-items: center;
  border: 2px black solid;
  background-color: blue;
`;
export const Hleft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border: 2px black solid;

  .paintedSun {
    border-radius: 50%;
    background-color: yellow;
  }
  .paintedCloud {
    border-radius: 50%;
    background-color: grey;
  }
  .paintedUm {
    border-radius: 50%;
    background-color: red;
  }
  .paintedSnow {
    border-radius: 50%;
    background-color: yellow;
  }
`;
