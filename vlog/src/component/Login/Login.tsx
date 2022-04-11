import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./Styled";

const Login = () => {
  const [Email, setEmail] = useState<string>("");
  const [PassWord, setPassWord] = useState<string>("");

  const onChangeEmail = (e: any) => {
    setEmail(e.currentTarget.value);
    console.log(Email);
  };
  const onChangePassWord = (e: any) => {
    console.log(e.target.value);
    setPassWord(e.currentTarget.value);
  };

  axios
    .post(
      "/blog/login",
      {
        Email: Email,
        Password: PassWord,
      }
      // {
      //   headers: { "Content-Type": "application/json" },
      // }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((error: any) => {
      console.log(error);
    });

  return (
    <>
      <S.Login>
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <S.LoginTitle>로그인</S.LoginTitle>
        </Link>
        <S.LoginInput>
          <p>Email</p>
          <input onChange={onChangeEmail} placeholder="Email을 입력하세요" />
        </S.LoginInput>
        <S.LoginInput>
          <p>PassWord</p>
          <input
            type="password"
            onChange={onChangePassWord}
            placeholder="PassWord을 입력하세요"
          />
        </S.LoginInput>
        <S.LoginButton>Login</S.LoginButton>
      </S.Login>
    </>
  );
};

export default Login;
