import styled from "styled-components";

export const ShowButoons = styled.div`
  width: 75vw;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Pbutton = styled.button`
  width: 120px;
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
  border-radius: 10px;
  cursor: pointer;
  transition: all ease 0.3s 0s;

  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: #ffdab3;
  }
`;
