import styled from "styled-components";

export const Position = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
`;

export const RIghtWapperr = styled.div`
  width: 20%;
`;
export const MainLogo = styled.img`
  height: 30%;
`;
export const InputBox = styled.div`
  width: 400px;
  height: 45%;
  margin-right: 30px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
`;
export const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  width: 80%;
`;
export const SearchIcon = styled.img`
  width: 25px;
`;

export const Contents = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;
`;

export const LeftWapper = styled.div`
  width: 15%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;

export const RightWapper = styled.div`
  width: 85%;
  height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  overflow-x: hidden;
  gap: 50px;
  background-color: whitesmoke;
`;

export const ShoppingTitle = styled.p`
  margin-top: 50px;
  font-size: 2rem;
`;

export const MiddleContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const DistinWapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const DistinTop = styled.div`
  width: 100%;
  height: 50px;
  background-color: #e6eaed;
`;

export const DistinBottom = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

export const CheckBox = styled.input`
  height: 100%;
  width: 12%;
  display: flex;
  align-items: center;
`;

export const DistImg = styled.img`
  height: 100%;
  width: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DIstDesc = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const DescTop = styled.p`
  font-size: 2rem;
`;
export const DescBottom = styled.p`
  font-size: 0.5rem;
`;

export const DistCost = styled.div`
  height: 100%;
  width: 20%;
  align-items: flex-end;
  padding-bottom: 15px;
`;
