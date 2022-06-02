import { useState } from "react";
import * as S from "./Styled";

const Order = () => {
  const [HeaderInput, setHeaderInput] = useState("");

  return (
    <S.Position>
      <S.Header>
        <S.RIghtWapper></S.RIghtWapper>
        <S.MainLogo src={"/img/Wear.png"} />
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
        <S.Sidebar></S.Sidebar>
        <S.RightWapper>
          <S.OrderProduct>
            <S.OrderTitle>주문하기</S.OrderTitle>
            <S.OrderDetails>주문 상품 내역</S.OrderDetails>
            <S.OrderBox>
              <S.OrderCompany>쇼핑그라운드</S.OrderCompany>
              <S.OrderBottomBox>
                <S.OrderTop>
                  <S.OrderImg />
                  <S.OrderDecs>
                    NMX 고퀄기획 세미와이드 트임슬랙스 BEIGE, M / 1개
                  </S.OrderDecs>
                </S.OrderTop>
                <S.OrderCost>24,900원</S.OrderCost>
              </S.OrderBottomBox>
            </S.OrderBox>
          </S.OrderProduct>
          <S.MiddleContent>
            <S.MiddleLeft>
              <S.CouponBox>
                <h3>쿠폰</h3>
                <S.HaveCouponBox>
                  <S.HaveCouponLeft>보유쿠폰 : 0개</S.HaveCouponLeft>
                  <S.SelecBtn>쿠폰 선택</S.SelecBtn>
                </S.HaveCouponBox>
              </S.CouponBox>
            </S.MiddleLeft>
            {/* <S.MiddleRight></S.MiddleRight> */}
          </S.MiddleContent>
        </S.RightWapper>
      </S.Contents>
    </S.Position>
  );
};

export default Order;
