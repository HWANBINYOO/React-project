import styled from "styled-components";

export const ShowButoons = styled.div`
  width: 75vw;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* border: 1px black solid; */
`;

export const Pbutton = styled.button`
  width: 10vw;
  height: 3vh;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background-color: #ff7b5a;
  color: white;

  font-size: 1rem;
  text-align: center;
  text-decoration: none;

  border: none;
  border-radius: 4px;
  cursor: pointer;

  & :hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: #ffdab3;
  }
`;
