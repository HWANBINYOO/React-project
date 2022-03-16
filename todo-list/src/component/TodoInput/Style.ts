import styled from "styled-components";

export const TodoInput = styled.div`
  width: 80%;
  height: 10vh;

  form {
    font-family: "LeeSeoyun";

    display: flex;
    justify-content: center;
    height: 2.5rem;
    width: 30rem;

    button {
      font-family: "LeeSeoyun";
      width: 6rem;
      font-size: 1.5rem;
      background-color: #d3a27f;
    }

    @media (max-width: 1366px) {
      height: 2rem;
      width: 27rem;
      button {
        width: 6rem;
        font-size: 1.3rem;
      }
    }
    @media (max-width: 1024px) {
      height: 1.8rem;
      width: 22rem;

      button {
        width: 6rem;
        font-size: 1rem;
      }
    }

    @media (max-width: 767px) {
      height: 1.3rem;
      width: 20rem;

      button {
        width: 3rem;
        font-size: 0.05rem;
      }
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;

  // border-right: 1px solid black;
  // border-left: 1px solid black;

  margin: 0 auto;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 0.5px black solid;

  input {
    font-family: "LeeSeoyun";
    width: 100%;
    height: 82%;
    padding-left: 1rem;
    outline: none;
    border: none;
    font-size: 1.5rem;

    @media (max-width: 1366px) {
      font-size: 1.3rem;
    }
    @media (max-width: 1024px) {
      font-size: 1rem;
    }

    @media (max-width: 767px) {
      font-size: 0.8rem;
    }
  }
`;
