import styled from "styled-components";

type btnType = {
  backColor: string;
};

export const Postionner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/img/back.png");
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWapper = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-radius: 5px;

  label {
    font-family: "EarlyFontDiary";
    width: 50px;
    height: 50px;
    position: relative;
    top: -70px;
    right: -100px;
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    img {
      width: 50px;
    }
  }
`;

export const ProfileImg = styled.div`
  img {
    width: 220px;
  }
`;

export const InputsWapper = styled.div`
  width: 80%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const InputBox = styled.div`
  width: 47%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const InutTitle = styled.p`
  font-size: 2rem;
`;

export const Input = styled.input`
  width: 90%;
  height: 50%;
  outline: none;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.5rem;
  padding-left: 10px;
`;

export const BtnWapper = styled.div`
  width: 30%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Btn = styled.button<btnType>`
  font-family: "EarlyFontDiary";
  width: 150px;
  height: 60px;
  border-radius: 5px;
  border: 1px solid #707070;
  font-size: 2rem;
  background-color: ${(props) => props.backColor};
`;
