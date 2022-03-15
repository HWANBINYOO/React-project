import styled from "styled-components";

export const TodoInput = styled.div`
  width: 80%;
  height: 10vh;

  form {
    display: flex;
    justify-content: center;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  border-right: 1px solid black;
  border-left: 1px solid black;
  margin: 0 auto;

  button {
    width: 6rem;
    font-color: 4rem;
    background-color: gray;
  }
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 0.5px black solid;

  input {
    width: 90%;
    padding-left: 1rem;
    outline: none;
    border: none;
    font-size: 1rem;
  }
`;
