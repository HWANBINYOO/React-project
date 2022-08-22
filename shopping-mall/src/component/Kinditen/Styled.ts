import styled from "styled-components";

export const KinditemWapper = styled.div`
  width: 200px;
  height: 350px;
  display: flex;
  flex-direction: column;
  margin: 50px 40px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ContentBox = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid gray;
  padding: 5px 0;
  gap: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Wear = styled.div`
  margin-left: 5px;
  font-size: 1rem;
`;

export const Decs = styled.div`
  margin-left: 5px;
  font-size: 1rem;
  width: 90%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
