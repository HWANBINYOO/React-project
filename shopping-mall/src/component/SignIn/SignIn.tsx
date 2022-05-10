import * as S from "./Styled";

const SignIn = () => {
  return (
    <>
      <S.Positioner>
        <S.Title>Search</S.Title>
        <S.SigninBox>
          <S.inputBox>
            <input placeholder="email" />
          </S.inputBox>
          <S.inputBox>
            <input placeholder="password" />
          </S.inputBox>
          <S.Btn>Sign in</S.Btn>
        </S.SigninBox>
      </S.Positioner>
    </>
  );
};

export default SignIn;
