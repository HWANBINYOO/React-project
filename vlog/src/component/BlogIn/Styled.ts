import styled from "styled-components";

export const BlogIn = styled.div`
  width: 100vw;
  height: 80vh;
  /* border: 1px black solid; */

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  gap: 20px;
`;

export const TextBox = styled.div`
  width: 90%;
  /* height: 50%; */
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  /* border: 1px black solid; */
  text-align: center;
`;

export const Title = styled.span`
  width: 80%;
  height: 50px;
  font-size: 3rem;
  font-weight: bold;
  /* border: 1px black solid; */
  text-align: center;
  padding: 3rem 0;
  margin: 0 auto;
`;

export const Img = styled.img`
  width: 88%;
  border-radius: 5px;
  /* height: 50%; */
  margin: 0 auto;
`;

export const desc = styled.div`
  width: 50%;
  height: 210px;
  font-size: 1.5rem;
  /* border: 1px black solid; */
  padding-top: 5rem;
  margin: 0 auto;
`;

export const date = styled.div`
  width: 100%;
  height: 7vh;
  font-size: 01rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-left: 1rem;
  color: gray;
  /* border: 1px black solid; */
`;

export const BlogButtonBox = styled.div`
  width: max-content;
  height: max-content;

  position: fixed;
  left: 670px;
  top: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px black solid; */
  border-radius: 10%;
  z-index: 100;
  gap: 1px;
  transition: all ease 0.25s 0s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover {
    background-color: #d3d3d3;
  }
`;

export const Button = styled.button`
  /* display: none; */
  z-index: -10;
  width: 4rem;
  height: 1.3rem;
  background-color: ${(props: any) => props.backgroundColor};
  outline: none;
  border-radius: 10px;
  /* border: 1px black solid; */
  border: none;
  font-size: 0.3rem;
`;
