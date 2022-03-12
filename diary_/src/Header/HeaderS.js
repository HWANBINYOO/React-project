import styled from "styled-components";

export const Header = styled.header`
font-family: "LeeSeoyun";

  display: flex;
  width: 90%;
  height: 10vh;
  margin 5vh auto 0;

  // border: 2px black solid;
`;

export const Hright = styled.div`
  font-size: 2rem;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid black;
  border-left: 2px solid black;

  // border: 2px black solid;
  // background-color: blue;
`;
export const Hleft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border-top: 2px solid black;
  border-right: 2px solid black;
  border-left: 2px solid black;
  // border: 2px black solid;

  .paintedSun {
    border-radius: 50%;
    background-color: #f08080;
  }
  .paintedCloud {
    border-radius: 50%;
    background-color: #d3d3d3;
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
