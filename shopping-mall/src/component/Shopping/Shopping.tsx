import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styled";

const a = [
  {
    MainMenu: "나의찜",
    name0: "계정",
    name1: "레벨",
    name2: "적립금",
    name3: "쿠폰함",
    name4: "주문내역",
    name5: "상품 Q&A",
    name6: "상품 1:1문의",
    name7: "상품리뷰",
  },
  {
    MainMenu: "장바구니",
    name0: "핀",
    name1: "코디좋아요",
    name2: "즐겨찾기",
    name3: "공지사항",
    name4: "자주듣는질문",
  },
];

const Shopping = () => {
  const [HeaderInput, setHeaderInput] = useState("");
  const navigate = useNavigate();
  const [side, setSide] = useState(a);

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
        <S.LeftWapper>
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
            </S.MenuWapper>
          ))}
        </S.LeftWapper>
        <S.RightWapper>
          <S.ShoppingTitle>장바구니</S.ShoppingTitle>
          <S.TopCheckBox>
            <S.CheckBoxInput type="checkbox" />
            <h2>삭제</h2>
          </S.TopCheckBox>
          <S.MiddleContent>
            <S.DistinWapper>
              <S.DistinTop />
              <S.DistinBottom>
                <S.CheckBox>
                  <S.CheckBoxInput type="checkbox" />
                </S.CheckBox>
                <S.ImgWapper>
                  <S.DistImg />
                </S.ImgWapper>
                <S.DIstDesc>
                  <S.DescTop>NMX 고컬기획 세미와이드 트임슬랙스</S.DescTop>
                  <S.DescBottom>BEIGE, M / 1개</S.DescBottom>
                </S.DIstDesc>
                <S.DistCost>10000</S.DistCost>
              </S.DistinBottom>
            </S.DistinWapper>

            <S.DistinWapper>
              <S.DistinTop />
              <S.DistinBottom>
                <S.CheckBox>
                  <S.CheckBoxInput type="checkbox" />
                </S.CheckBox>
                <S.ImgWapper>
                  <S.DistImg />
                </S.ImgWapper>
                <S.DIstDesc>
                  <S.DescTop>NMX 고컬기획 세미와이드 트임슬랙스</S.DescTop>
                  <S.DescBottom>BEIGE, M / 1개</S.DescBottom>
                </S.DIstDesc>
                <S.DistCost>10000</S.DistCost>
              </S.DistinBottom>
            </S.DistinWapper>

            <S.DistinWapper>
              <S.DistinTop />
              <S.DistinBottom>
                <S.CheckBox>
                  <S.CheckBoxInput type="checkbox" />
                </S.CheckBox>
                <S.ImgWapper>
                  <S.DistImg />
                </S.ImgWapper>
                <S.DIstDesc>
                  <S.DescTop>NMX 고컬기획 세미와이드 트임슬랙스</S.DescTop>
                  <S.DescBottom>BEIGE, M / 1개</S.DescBottom>
                </S.DIstDesc>
                <S.DistCost>10000</S.DistCost>
              </S.DistinBottom>
            </S.DistinWapper>
          </S.MiddleContent>
          <S.BtnWapper>
            <S.PayBtn>주문하기</S.PayBtn>
          </S.BtnWapper>
        </S.RightWapper>
      </S.Contents>
    </S.Position>
  );
};

export default Shopping;
