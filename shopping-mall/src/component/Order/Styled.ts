import styled from "styled-components";

export const Position = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
`;

export const RIghtWapper = styled.div`
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
  background-color: gray;
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;
`;

export const Sidebar = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

export const RightWapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: scroll;
  padding-top: 50px;
`;

export const OrderProduct = styled.div`
  width: 90%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

export const OrderTitle = styled.div`
  font-size: 2rem;
`;

export const OrderDetails = styled.div`
  font-size: 1.5rem;
`;

export const OrderBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const OrderCompany = styled.div`
  padding-left: 20px;
  height: 45px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  border: 1px solid black;
  background-color: #e6eaed;
`;

export const OrderBottomBox = styled.div`
  width: calc(100% -20px);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 10px;
  border: 1px solid black;
  background-color: #f9f9fa;
`;

export const OrderTop = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const OrderImg = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const OrderDecs = styled.div`
  font-size: 0.8rem;
`;

export const OrderCost = styled.div`
  font-size: 0.7rem;
  margin-bottom: 10px;
`;
