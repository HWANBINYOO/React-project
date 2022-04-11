import * as S from "./Styled";

const Login = () => {
  return (
    <>
      <S.Login>
        <S.Email>
          <p>Email</p>
          <input type="text" placeholder="Email을 입력하세요" />
        </S.Email>
        <S.PassWord>
          <p>PassWord</p>
          <input type="text" placeholder="PassWord  을 입력하세요" />
        </S.PassWord>
        <S.LoginButton>로그인</S.LoginButton>
      </S.Login>
    </>
  );
};

export default Login;
