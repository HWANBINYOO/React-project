import styled from "styled-components";

export const Login = styled.div`
  padding-top: 15vh;

  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const LoginTitle = styled.span`
  font-size: 5rem;
`;

export const LoginInput = styled.div`
  p {
    font-size: 2rem;
  }
  textarea {
    margin-top: 1rem;
    font-family: "GangwonEduSaeeum_OTFMediumA";
    width: 50%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    font-size: 2.5rem;
    resize: none;
  }
`;

// export const PassWord = styled.div``;

export const LoginButton = styled.button`
  font-family: "GangwonEduSaeeum_OTFMediumA";
  width: 30%;
  height: 5vh;
  border-radius: 10px;
  border: none;
  font-size: 1.8rem;
  background-color: #c8abc5;
  /* font-weight: bold; */
`;
