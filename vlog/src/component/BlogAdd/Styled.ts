import styled from "styled-components";

export const BlogAdd = styled.div`
  width: 100vw;
  height: 80vh;
  /* border: 1px black solid; */
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* overflow-y: scroll; */
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const DescInputBox = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  justify-content: center;
  background-color: white;

  textarea {
    margin-top: 1rem;
    font-family: "GangwonEduSaeeum_OTFMediumA";
    width: 90%;
    height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    outline: none;
    font-size: 2rem;
    resize: none;
  }
`;

export const Input = styled.input`
  font-family: "GangwonEduSaeeum_OTFMediumA";

  background-color: transparent;
  border: none;
  outline: none;
  width: 90%;
  height: 80%;
`;

export const Today = styled.span`
  margin-left: 3rem;
  padding: 1.5rem 0;
`;

export const Button = styled.button`
  font-family: "GangwonEduSaeeum_OTFMediumA";
  margin-left: 3rem;
  background-color: #d3d3d3;
  border-radius: 10px;
  font-size: 2rem;
  border: none;
  width: 10rem;
  height: 5vh;
  text-align: center;
`;
