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
  width: 50%;
  min-height: 300px;
  font-size: 2rem;
  padding-top: 5rem;
  margin: 0 auto;
  text-align: left;
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
  z-index: 100;
  gap: 1px;
  transition: all ease 0.25s 0s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Button = styled.button`
  z-index: -10;
  width: 6rem;
  height: 2rem;
  background-color: ${(props: any) => props.backgroundColor};
  outline: none;
  border-radius: 10px;
  border: none;
  /* font-size: 1.4rem; */
  transition: all ease 0.2s 0s;

  &:hover {
    border-radius: 0px;
  }
`;

export const Name = styled.div`
  font-size: 1.5rem;
  color: gray;
`;

export const NameDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
  padding-right: 29vw;
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

export const ModalContainal = styled.div`
  position: fixed;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 300px;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  border: 0px solid black;
  border-radius: 15px;
  transition: all ease-in-out 0.3s 0;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  img {
    background-color: white;
    width: 70%;
    height: 60%;
    border: 0px solid black;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 30px;
    width: 250px;
    height: 60px;
    border-radius: 10px;
    background-color: white;
  }
`;
