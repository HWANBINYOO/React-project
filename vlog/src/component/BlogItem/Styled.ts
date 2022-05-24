import styled from "styled-components";

export const BlogItem = styled.div`
  width: 300px;
  height: 440px;
  display: flex;
  flex-direction: column;
  border: 1px gray solid;
  margin: 2rem 2rem;
  border-radius: 5px;
  justify-content: space-between;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  transition: all ease 0.25s 0s;

  &:hover {
    transform: scale(1.03);
  }
`;

export const TextBox = styled.div`
  width: 90%;
  /* height: 50%; */
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 5px;
  /* height: 50%; */
`;

export const Title = styled.span`
  width: 100%;
  height: 30px;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  text-align: center;

  //글자수가많으면 ...으로 처리한다
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const desc = styled.div`
  width: 100%;
  /* height: 40px; */
  font-size: 0.8rem;
  /* border: 1px black solid; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ItemBottom = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
`;

export const BottomLeft = styled.div`
  display: flex;
`;

export const MemberImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 50px;
    height: 50px;
  }
`;

export const MemberId = styled.div`
  font-size: 1.5rem;
`;

export const date = styled.div`
  color: gray;
`;
