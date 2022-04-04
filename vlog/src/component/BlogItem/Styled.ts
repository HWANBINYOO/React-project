import styled from "styled-components";

export const BlogItem = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  margin: 2rem auto;
  border-radius: 10px;
  justify-content: space-between;
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

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  /* height: 50%; */
`;

export const Title = styled.span`
  width: 100%;
  height: 30px;
  font-size: 1.5rem;
  font-weight: bold;
  /* border: 1px black solid; */
  text-align: center;
  text-align: center;

  //글자수가많으면 ...으로 처리한다
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const desc = styled.div`
  width: 100%;
  height: 30px;
  font-size: 1rem;
  /* border: 1px black solid; */
`;

export const date = styled.div`
  width: 100%;
  height: 4vh;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1rem;
  color: gray;
  /* border: 1px black solid; */
`;
