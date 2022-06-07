import { useState } from "react";
import * as S from "./Styled";

const Order = () => {
  const [HeaderInput, setHeaderInput] = useState("");

  return (
    <S.Position>
      <S.Header>
        <S.RIghtWapperr></S.RIghtWapperr>
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
              <S.CouponBox>
                <h3>적립금</h3>
                <h4>보유 적입금 311원</h4>
                <S.HaveCouponBox>
                  <S.ReservesInputBox placeholder="0" />
                  <S.SelecBtn>모두 사용</S.SelecBtn>
                </S.HaveCouponBox>
              </S.CouponBox>
              <S.BottomDecs>
                <p>
                  (최소)1,000원 ~ (최대)상품 가격의 10%까지 사용 가능합니다.
                </p>
                <p>적립금은 10원 단위로 사용 가능합니다.</p>
              </S.BottomDecs>
            </S.MiddleLeft>
            <S.MiddleRight>
              <S.PayTItle>결재금액</S.PayTItle>
              <S.PayTop>
                <S.CostBox>
                  <S.CostBoxLeft>상품금액</S.CostBoxLeft>
                  <S.CostBoxRight>39,000원</S.CostBoxRight>
                </S.CostBox>
                <S.CostBox>
                  <S.CostBoxLeft>할인금액</S.CostBoxLeft>
                  <S.CostBoxRight>14,100원</S.CostBoxRight>
                </S.CostBox>
                <S.CostBox>
                  <S.CostBoxLeft>쿠폰사용</S.CostBoxLeft>
                  <S.CostBoxRight>0원</S.CostBoxRight>
                </S.CostBox>
                <S.CostBox>
                  <S.CostBoxLeft>상품금액</S.CostBoxLeft>
                  <S.CostBoxRight>0원</S.CostBoxRight>
                </S.CostBox>
              </S.PayTop>
              <S.Hr />
              <S.PayAdd>
                <S.PayAddS>
                  <S.PayP>총 결재금액</S.PayP>
                  <S.PayCost>24,900원</S.PayCost>
                </S.PayAddS>
                <S.PayAddS>
                  <S.PayPBlue>예상 적립금</S.PayPBlue>
                  <S.PayCostBlue>249원</S.PayCostBlue>
                </S.PayAddS>
              </S.PayAdd>
              <S.PayBtn>결재하기</S.PayBtn>
            </S.MiddleRight>
          </S.MiddleContent>
          <S.ShoppingAddress>
            <S.TopTItle>배송지 정보</S.TopTItle>
            <S.AddressContent>
              <span>이름</span>
              <S.AdreesInput />
            </S.AddressContent>
            <S.AddressContent>
              <span>연락처</span>
              <S.AdreesInput />
            </S.AddressContent>
            <S.AddressContent>
              <span>우편번호</span>
              <S.AdreesInput />
            </S.AddressContent>
            <S.LongAdressContent>
              <span>주소</span>
              <S.AdreesInput />
            </S.LongAdressContent>
            <S.LongAdressContent>
              <span></span>
              <S.AdreesInput />
            </S.LongAdressContent>
            <S.LongAdressContent>
              <span>배송요청사항</span>
              <S.AdreesInput />
            </S.LongAdressContent>
          </S.ShoppingAddress>
          <S.PaymentWapper>
            <S.PayMentTitle>결재방법</S.PayMentTitle>
            <S.PayMentInputs>
              <input type="radio" />
              카드결재
              <input type="radio" />
              가상계좌
              <input type="radio" />
              네이버페이
              <input type="radio" />
              카카오페이
              <input type="radio" />
              페이코
              <input type="radio" />
              핸드폰 결제
            </S.PayMentInputs>
          </S.PaymentWapper>
        </S.RightWapper>
      </S.Contents>
    </S.Position>
  );
};

export default Order;
