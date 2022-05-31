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
        <S.KindInImg></S.KindInImg>
        <S.KindRight>
          <S.KindDecs>
            <S.KindTitle></S.KindTitle>
            <S.KindSize></S.KindSize>
          </S.KindDecs>
          <S.Kind></S.Kind>
        </S.KindRight>
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
      </S.Contents>
    </S.KindInWapper>
  );
};

export default KindIn;
