import styled from "styled-components";

export const BlogIn = styled.div`
  width: 100vw;
  height: 80vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 20px;
`;

export const TextBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  text-align: center;
`;

export const Title = styled.h1`
  width: 80%;
  height: 30px;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  padding: 3rem 0;
  margin: 0 auto;
`;

export const Img = styled.img`
  width: 40%;
  border-radius: 5px;
  margin: 0 auto;
`;

export const desc = styled.div`
  max-width: 80%;
  min-height: 300px;
  font-size: 2rem;
  padding-top: 5rem;
  margin: 0 auto;
  text-align: left;

  pre {
    white-space: pre-wrap;
  }
`;

export const date = styled.div`
  font-size: 1.5rem;
  color: gray;
`;

export const BlogButtonBox = styled.div`
  width: max-content;
  height: max-content;
  position: fixed;
  right: 5vw;
  top: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10%;
  z-index: 1;
  gap: 1px;
  transition: all ease 0.25s 0s;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const Button = styled.button`
  font-family: "GangwonEduSaeeum_OTFMediumA";
  z-index: -10;
  width: 6rem;
  height: 2rem;
  background-color: ${(props: any) => props.backgroundColor};
  outline: none;
  border-radius: 10px;
  border: none;
  transition: all ease 0.2s 0s;
  color: #2c2c2c;
  &:hover {
    border-radius: 0px;
  }
`;

export const Name = styled.div`
  font-size: 1.5rem;
  color: gray;
`;

export const H1 = styled.h1`
  position: relative;
  font-size: 3rem;
  cursor: pointer;
  color: gray;

  &:hover {
    color: black;
  }
`;

export const NameDate = styled.div`
  width: 34%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileWapper = styled.div`
  width: 30%;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 50px;
  padding: 20px 50px;
  gap: 50px;
  border-bottom: 1px solid gray;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ProfileName = styled.span`
  font-size: 2rem;
`;

export const Modal = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: all ease-in-out 0.3s 0;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const ModalContainalDelete = styled.div`
  position: fixed;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 20%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border: 0px solid black;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  button {
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 1.5rem;
    width: 7vw;
    height: 5vh;
    border-radius: 10px;
    background-color: white;
    border: none;
  }
  button:hover {
    transition: all ease-in-out 0.05s;
    transform: scale(1.05);
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;

export const ModalContainal = styled.div`
  position: absolute;
  bottom: -26vh;
  right: -8vw;

  transform: translate(-50%, -50%);
  max-height: 80vh;
  width: 16vw;
  height: 17vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  button {
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 1.5rem;
    width: 100%;
    height: 25%;
    background-color: white;
    border: 1px solid gray;
  }
  button:hover {
    border: 2px solid black;
  }
`;
