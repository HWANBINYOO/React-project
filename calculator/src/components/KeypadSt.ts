import styled from "styled-components";

export const Keypad = styled.div`
  //   display: flex;
  //   flex-wrap: wrap;
  //   flex-direction: column;
  height: 50vh;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 5px/ 5px;
  gap: 5px;

  & :nth-child(12) {
    grid-column: 4/5;
    grid-row: 3/6;
  }
  & :nth-child(16) {
    grid-column: 1/3;
    grid-row: 5/6;
  }
`;
