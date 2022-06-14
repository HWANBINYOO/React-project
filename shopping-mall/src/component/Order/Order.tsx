import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../Libs/CustomAxois";
import * as S from "./Styled";

const a = [
  {
    MainMenu: "상의",
    name0: "반팔티",
    name1: "셔츠/난방",
    name2: "긴팔티",
    name3: "맨투맨",
    name4: "후드티/아노락",
    name5: "후드집업",
    name6: "니트/스웨터",
    name7: "민소매/나시",
    name8: "트레이닝상의",
  },
  {
    MainMenu: "아우터",
    name0: "코트",
    name1: "정퍼",
    name2: "자켓",
    name3: "무스탕",
    name4: "가디건",
    name5: "항공점퍼/불루종",
    name6: "패딩/다운",
    name7: "수트",
  },
  {
    MainMenu: "하의",
    name0: "청바지",
    name1: "슬랙스",
    name2: "면바지",
    name3: "트레이닝하의",
    name4: "반바지",
    name5: "조거팬츠",
  },
  {
    MainMenu: "신발",
    name0: "슬립온",
    name1: "스니커즈",
    name2: "운동화",
    name3: "워커",
    name4: "부츠",
    name5: "로퍼",
    name6: "구두",
  },
];

const Order = () => {
  const [HeaderInput, setHeaderInput] = useState("");
  const [X, setX] = useState("카드결재");
  const [side, setSide] = useState(a);
  const navigate = useNavigate();

  const onClickRadioInput = (e: any) => {
    setX(e.target.value);
  };

  const onHome = () => {
    navigate("/");
  };

  const onClickcoupon = async () => {
    try {
      const { data } = await customAxios.get("/cp/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "53e64f1b8519d907df3ff91e6f47ba7a4a248647",
          RefreshToken:
            "1f86b9fd0f323fa33fa321c02a762a47142bbb9b24939b6aca32c0cf8617d0aa",
        },
      });
      console.log(data);
    } catch (e: any) {
      const { data } = e.response;
      console.error(data.message);
      console.error("data : ", data);
    }
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
        <S.Sidebar>
          {side.map((item, index) => (
            <S.MenuWapper key={index}>
              <S.MainMenu>{item.MainMenu}</S.MainMenu>
              <S.Submenu>{item.name0}</S.Submenu>
              <S.Submenu>{item.name1}</S.Submenu>
              <S.Submenu>{item.name2}</S.Submenu>
              <S.Submenu>{item.name3}</S.Submenu>
              <S.Submenu>{item.name4}</S.Submenu>
              <S.Submenu>{item.name5}</S.Submenu>
              <S.Submenu>{item.name6}</S.Submenu>
              <S.Submenu>{item.name7}</S.Submenu>
              <S.Submenu>{item.name8}</S.Submenu>
            </S.MenuWapper>
          ))}
        </S.Sidebar>

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
                  <S.SelecBtn onClick={onClickcoupon}>쿠폰 선택</S.SelecBtn>
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
                  (최소)1,000원 ~ (최대)상품 가격의 10%까지 사용 가능합니다.y
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
              <S.AddressSearsh>주소검색</S.AddressSearsh>
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
              <S.PayInput>
                <label>
                  <input
                    type="radio"
                    value={"카드결재"}
                    onChange={onClickRadioInput}
                    checked={X === "카드결재"}
                  />
                  카드결재
                </label>
              </S.PayInput>
              <S.PayInput>
                <label>
                  <input
                    type="radio"
                    value={"가상계좌"}
                    onChange={onClickRadioInput}
                    checked={X === "가상계좌"}
                  />
                  가상계좌
                </label>
              </S.PayInput>
              <S.PayInput>
                <label>
                  <input
                    type="radio"
                    value={"네이버페이"}
                    onChange={onClickRadioInput}
                    checked={X === "네이버페이"}
                  />
                  네이버페이
                </label>
              </S.PayInput>
              <S.PayInput>
                <label>
                  <input
                    type="radio"
                    value={"카카오페이"}
                    onChange={onClickRadioInput}
                    checked={X === "카카오페이"}
                  />
                  카카오페이
                </label>
              </S.PayInput>
              <S.PayInput>
                <label>
                  <input
                    type="radio"
                    value={"페이코"}
                    onChange={onClickRadioInput}
                    checked={X === "페이코"}
                  />
                  페이코
                </label>
              </S.PayInput>
              <S.PayInput>
                <label>
                  <input
                    type="radio"
                    value={"핸드폰결재"}
                    onChange={onClickRadioInput}
                    checked={X === "핸드폰결재"}
                  />
                  핸드폰결재
                </label>
              </S.PayInput>
            </S.PayMentInputs>
          </S.PaymentWapper>
        </S.RightWapper>
      </S.Contents>
    </S.Position>
  );
};

export default Order;
