import styled from "styled-components";

export const Positioner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

export const Title = styled.h1`
  font-family: "Inika", serif;
  font-size: 5rem;
  font-weight: 100;
  color: #755139;
`;

export const SigninBox = styled.div`
  width: 600px;
  height: 480px;
  border: 1px solid #755139;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 55px;
  background-color: #faf5e3;
  /* opacity: 0.5; */
`;

export const inputBox = styled.div`
  width: 70%;
  height: 15%;
  border: 3px solid #755139;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  background-color: white;
  input {
    border: none;
    outline: none;
    font-size: 1.8rem;
    &::-webkit-input-placeholder {
      color: #a9978b;
    }
  }
`;

export const Btn = styled.button`
  width: 40%;
  height: 15%;
  font-size: 2rem;
  border-radius: 10px;
  background-color: #755139;
  color: #f2edd7;
  border: none;
`;
