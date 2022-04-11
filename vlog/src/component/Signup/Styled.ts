import styled from "styled-components";

export const Login = styled.div`
  padding-top: 10vh;

  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const LoginTitle = styled.span`
  font-size: 5.5rem;
`;

export const SignupInput = styled.div`
  p {
    font-size: 2rem;
    font-weight: bold;
  }
  input {
    margin-top: 1rem;
    font-family: "SuncheonB";
    width: 60%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 1.5rem;
    resize: none;
    overflow-y: hidden;
    transition: all ease 0.2s 0s;
  }
  input:focus {
    border-color: #c8abc5;
    color: #c8abc5;
  }
`;

// export const PassWord = styled.div``;

export const LoginButton = styled.button`
  font-family: "SuncheonB";
  width: 30%;
  height: 5vh;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  background-color: #c8abc5;
  transition: all ease 0.2s 0s;

  /* font-weight: bold; */

  &:hover {
    opacity: 0.8;
  }
`;
