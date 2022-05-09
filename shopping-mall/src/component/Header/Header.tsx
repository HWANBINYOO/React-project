import * as S from "./Styled";

const Header = () => {
  return (
    <>
      <S.Header>
        <S.Sign>
          <S.SignInUp>Sign in</S.SignInUp>
          <S.SignInUp>Sign up</S.SignInUp>
        </S.Sign>
        <S.HeaderBottom>
          <S.Mainlogo>Search</S.Mainlogo>
          <S.InputBox>
            <S.Input />
            <S.SearchImg src={"/img/search.png"} />
          </S.InputBox>
          <S.ProfileImg src={"/img/profile.png"} />
        </S.HeaderBottom>
      </S.Header>
    </>
  );
};

export default Header;
