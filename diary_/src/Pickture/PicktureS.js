import styled from "styled-components";

export const DiaryBox = styled.div`
font-family: "LeeSeoyun";

  width: 90%;
  height:35vh;

  // background-color: blue;
  display: flex;
  justify-content: center;
  align-items:center;

  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid black;
  margin 0 auto;

  label{
    display:flex;
    align-items:center;
    justify-content: center;
    
    width:100%;
    height:100%;
    font-size: 1.5rem;
    color: grey;
    transition-duration: 0.5s;

  }
  label:hover{
    background-color: skyblue;
  }
`;
