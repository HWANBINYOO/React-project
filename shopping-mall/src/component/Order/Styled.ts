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
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  background-color: darkgray;
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
  width: 50px;
  height: 50px;
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

export const MiddleContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export const MiddleLeft = styled.div`
  width: 40%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5% 0 5% 5%;
`;

export const CouponBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  h3 {
    font-family: "EarlyFontDiary";
    font-size: 1.5rem;
    font-weight: lighter;
  }
  h4 {
    font-family: "EarlyFontDiary";
    font-size: 1rem;
    font-weight: lighter;
    margin-left: 5px;
  }
`;

export const HaveCouponBox = styled.div`
  width: 90%;
  height: 50%;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const HaveCouponLeft = styled.div`
  width: 70%;
  height: 40px;
  border-bottom: 1px solid black;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SelecBtn = styled.button`
  width: 110px;
  height: 40px;
  border: 1px solid #b0caf6;
  background-color: white;
  color: #b0caf6;
  text-align: bottom;
  border-radius: 5px;
  font-size: 1rem;
`;

export const ReservesInputBox = styled.input`
  width: 70%;
  height: 40px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: #b8b8b8;
  text-align: end;
  padding-right: 10px;
  color: black;
  font-size: 1.5rem;
`;

export const BottomDecs = styled.div`
  margin: 10px 0 0 20px;
  font-size: 0.5rem;
`;

export const MiddleRight = styled.div`
  width: 20%;
  height: 280px;
  display: flex;
  flex-direction: column;
  background-color: aquamarine;
`;

export const PayTItle = styled.div`
  font-size: 1.5rem;
`;

export const PayTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PayAdd = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PayAddS = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PayP = styled.div`
  font-size: 1.5rem;
  color: red;
`;

export const PayCost = styled.div`
  font-size: 1rem;
  color: red;
`;

export const PayPBlue = styled.div`
  font-size: 1.5rem;
  color: blue;
`;

export const PayCostBlue = styled.div`
  font-size: 1rem;
  color: blue;
`;
