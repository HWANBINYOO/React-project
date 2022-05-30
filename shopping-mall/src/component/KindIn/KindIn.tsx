import * as S from "./Styled";

const KindIn = () => {
  return (

    <S.KindInWapper>
        <S.Header>
            <S.MainLogo></S.MainLogo>
            <S.InputBox>
                <S.SearchInput />
                <S.SearchIcon></S.SearchIcon>
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
            </S.KindDecs>
        </S.Contents>

  </S.KindInWapper>;
      )
};

export default KindIn;
