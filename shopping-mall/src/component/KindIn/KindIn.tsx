import * as S from "./Styled";

const KindIn = () => {
  return (
    <S.KindInWapper>
      <S.Header>
        <S.RIghtWapper></S.RIghtWapper>
        <S.MainLogo src={"/img/Wear.png"} />
        <S.InputBox>
          <S.SearchInput placeholder="어떤 상품을 찾으신가요?" />
          <S.SearchIcon src={"/img/searchIcon.png"} />
        </S.InputBox>
      </S.Header>
      <S.Contents>
        <S.LeftContent></S.LeftContent>
        <S.KindInImgWapper>
          <S.KindInImg src={"/img/bluepants.png"} />
        </S.KindInImgWapper>
        <S.KindRight>
          <S.KindDecs>
            <S.KindTitle>와이드 청바지 와이드 데님 팬츠</S.KindTitle>
            <S.KindSize>
              XS(25) : 허리 34.5 밑위 26 허벅지 29 밑단 20 총장 96.5 S(26) :
              허리 38 밑위 27 허벅지 30 밑단 21 총장 98 M(28) : 허리 39.5 밑위
              28 허벅지 31 밑단 22 총장 99.5 L(30) : 허리 41 밑위 29 허벅지 32
              밑단 23 총장 101 XL (32) : 허리 42.5 밑위 30 허벅지 33 밑단 24
              총장 102.5 2XL (34) : 허리 44 밑위 32 허벅지 34 밑단 25 총장 104
            </S.KindSize>
          </S.KindDecs>
          <S.KindCost>
            <S.KindTop></S.KindTop>
            <hr />
            <S.KindCostBottom>
              <S.KindChoose>옵션선택</S.KindChoose>
              <S.KindOption></S.KindOption>
            </S.KindCostBottom>
          </S.KindCost>
          <S.Buttons>
            <S.LeftBtn>찜하기</S.LeftBtn>
            <S.CenterBtn>장바구니</S.CenterBtn>
            <S.RightBtn>구매하기</S.RightBtn>
          </S.Buttons>
        </S.KindRight>
      </S.Contents>
    </S.KindInWapper>
  );
};

export default KindIn;
