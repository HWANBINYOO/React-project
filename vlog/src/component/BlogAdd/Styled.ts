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
  margin-left: 6vw;
`;

export const InputBox = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  textarea {
    font-family: "GangwonEduSaeeum_OTFMediumA";
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    outline: none;
    font-size: 3rem;
    resize: none;
  }
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
    width: 100%;
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

export const BlogImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    transition: all ease 0.2s 0s;
    width: 100px;
    height: 100px;
  }
`;
// export const Input = styled.input`
//   font-family: "GangwonEduSaeeum_OTFMediumA";

//   background-color: transparent;
//   border: none;
//   outline: none;
//   width: 90%;
//   height: 80%;
// `;
export const BlogAddImgWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100px;
  margin-left: 6vw;
  label {
    position: relative;
    top: -50px;
    right: -350px;
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 25px;
    background-color: white;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    transition: all ease 0.1s 0s;
    padding: 22px 20px 22px 20px;
    &:hover {
      transform: scale(1.03);
    }
  }
`;

export const Today = styled.span`
  margin-left: 6vw;
  padding: 1.5rem 0;
`;

export const Button = styled.button`
  font-family: "GangwonEduSaeeum_OTFMediumA";
  margin-left: 6vw;
  background-color: #ffc895;
  border-radius: 10px;
  font-size: 2rem;
  border: none;
  width: 10rem;
  height: 5vh;
  text-align: center;
`;
