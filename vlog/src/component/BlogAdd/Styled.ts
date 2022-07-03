import styled from "styled-components";

export const BlogAddWapper = styled.div`
  width: 100vw;
  height: 80vh;
  padding-top: 2rem;
  display: flex;
`;

export const BlogAdd = styled.div`
  width: 44vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 6vw;
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
  margin-top: 20px;

  textarea {
    font-family: "GangwonEduSaeeum_OTFMediumA";
    width: 100%;
    height: 100%;
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
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: none;
    outline: none;
    font-size: 1.5rem;
    resize: none;
  }
`;

export const BlogImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    transition: all ease 0.2s 0s;
    width: 90px;
    height: 100px;
    object-fit: cover;
    border: 1px solid black;
  }
`;
export const BlogAddImgWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100px;
  label {
    position: relative;
    top: -30px;
    right: -120px;
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 20px;
    border: none;
    color: black;
    cursor: pointer;
    transition: all ease 0.3s 0s;
    padding: 14px 20px 14px 20px;
    border-radius: 10px;
    background-color: #e2e7f2;
    &:hover {
      background-color: #c4cfe4;
    }
  }
`;

export const Today = styled.span`
  padding: 1.5rem 0;
`;

export const Button = styled.button`
  font-family: "GangwonEduSaeeum_OTFMediumA";
  background-color: #ffc895;
  border-radius: 10px;
  font-size: 2rem;
  border: none;
  width: 10rem;
  height: 5vh;
  text-align: center;
`;

export const BlogAddpreview = styled.div`
  width: 44vw;
  height: 75vh;
  background-color: #f5f5f5;
  padding: 00px 3vw 5vh 3vw;
  font-size: 1.25rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 3rem;
    height: 100px;
    display: flex;
    align-items: center;
  }
`;
