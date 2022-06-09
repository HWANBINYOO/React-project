import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styled";

const Shopping = () => {
  const [HeaderInput, setHeaderInput] = useState("");
  const navigate = useNavigate();

  const onHome = () => {
    navigate("/");
  };

  return (
    <S.Position>
      <S.Header>
        <S.RIghtWapperr></S.RIghtWapperr>
        <S.MainLogo src={"/img/Wear.png"} onClick={onHome} />
        <S.InputBox>
          <S.SearchInput
            placeholder="어떤 상품을 찾으신가요?"
            onChange={(e) => setHeaderInput(e.target.value)}
            value={HeaderInput}
          />
          <S.SearchIcon src={"/img/searchIcon.png"} />
        </S.InputBox>
      </S.Header>
      <S.Contents>
        <S.LeftWapper></S.LeftWapper>
        <S.RightWapper>
          <S.ShoppingTitle>장바구니</S.ShoppingTitle>
          <S.MiddleContent>
            <S.DistinWapper>
              <S.DistinTop />
              <S.DistinBottom>
                <S.CheckBox type="checkbox" />
                <S.DistImg />
                <S.DIstDesc>
                  <S.DescTop>NMX 고컬기획 세미와이드 트임슬랙스</S.DescTop>
                  <S.DescBottom>BEIGE, M / 1개</S.DescBottom>
                </S.DIstDesc>
                <S.DistCost>10000</S.DistCost>
              </S.DistinBottom>
            </S.DistinWapper>
          </S.MiddleContent>
        </S.RightWapper>
      </S.Contents>
    </S.Position>
  );
};

export default Shopping;
