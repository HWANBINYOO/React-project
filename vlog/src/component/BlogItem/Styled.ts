import styled from "styled-components";

export const BlogItem = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: column;
`;

export const TextBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

export const Img = styled.img`
  width: 30%;
`;

export const Title = styled.span`
  width: 30%;
  height: 10%;
  font-size: 1rem;
  font-weight: bold;
`;

export const desc = styled.div`
  width: 30%;
  height: 20%;
  font-size: 0.7%;
`;

export const date = styled.div`
  width: 30%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
