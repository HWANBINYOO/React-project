import styled from "styled-components";

export const Button = styled.button`
  background: #195190;
  display: flex;
  box-sizing: border-box;
  border: none;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  font-size: 24px;

  border-radius: 5px/ 5px;
  color: white;
  animation-duration: 1s;

  &:hover {
    background: #a2a2a1;
    cursor: default;
  }
`;
