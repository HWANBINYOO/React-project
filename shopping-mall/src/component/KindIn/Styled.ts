import styled from "styled-components";

export const KindInWapper = styled.div`
  width: 100vw;
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
  justify-content: space-between;
`;
export const LeftContent = styled.div`
  width: 25%;
  height: 100%;
  background-color: darkgray;
`;
export const KindInImgWapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
`;

export const KindInImg = styled.img`
  width: 100%;
`;

export const KindRight = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const KindDecs = styled.div`
  width: 70%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
export const KindTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: 2rem;
`;
export const KindSize = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 3vw;
  color: gray;
  font-size: 1rem;
`;

export const KindCost = styled.div`
  width: 70%;
  height: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const hr = styled.hr`
  width: 100%;
  height: 2px;
  border: none;
  background-color: black;
`;
export const KindTop = styled.div`
  font-size: 2rem;
  color: red;
`;
export const KindCostBottom = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const KindChoose = styled.div`
  font-size: 1rem;
  color: gray;
`;

export const KindOption = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  select {
    width: 80%;
    height: 40px;
    background-color: white;
    font-size: 1rem;
    padding-left: 10px;
    color: gray;
  }

  .SelectTop {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .SelectBottom {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const Buttons = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;
export const Btn = styled.button`
  font-family: "EarlyFontDiary";
  width: 30%;
  height: 40%;
  border-radius: 10px;
  background-color: black;
  color: white;
  border: none;
  font-size: 1rem;
`;
