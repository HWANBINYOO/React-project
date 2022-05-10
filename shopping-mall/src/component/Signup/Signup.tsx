import * as S from "./Styled";

const Signup = () => {
  return (
    <>
      <S.Positioner>
        <S.Title>Search</S.Title>
        <S.SigninBox>
          <S.inputBox>
            <input placeholder="name" />
          </S.inputBox>
          <S.EmailWapper>
            <S.EmailinputBox>
              <input placeholder="email" />
            </S.EmailinputBox>
            <button>check</button>
          </S.EmailWapper>
          <S.inputBox>
            <input placeholder="password" />
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

export default Signup;
