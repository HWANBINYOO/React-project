import styled from "styled-components";

export const BlogItem = styled.div`
  width: 300px;
  height: max-content;
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  margin: 0 auto;
  border-radius: 10px;
`;

export const TextBox = styled.div`
  width: 100%;
  /* height: 50%; */
  display: flex;
  flex-direction: column;
  /* padding: 2rem 1rem; */
  border: 1px black solid;
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
  font-size: 1rem;
  font-weight: bold;
  border: 1px black solid;
  text-align: center;
`;

export const desc = styled.div`
  width: 100%;
  height: 30px;
  font-size: 0.7%;
  border: 1px black solid;
  text-align: center;
`;

export const date = styled.div`
  width: 100%;
  height: 4vh;
  font-size: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px black solid;
`;
