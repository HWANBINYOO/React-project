import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Styled";

const Login = () => {
  const [Email, setEmail] = useState<string>("");
  const [PassWord, setPassWord] = useState<string>("");
  const navigate = useNavigate();

  const onChangeEmail = (e: any) => {
    setEmail(e.currentTarget.value);
    console.log(Email);
  };
  const onChangePassWord = (e: any) => {
    console.log(e.target.value);
    setPassWord(e.currentTarget.value);
  };

  const data = [
    {
      Email: Email,
      Password: PassWord,
    },
  ];

  axios
    .post("/blog/login", data)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("Blog_accessToken", res.data.data.accessToken);
      localStorage.setItem("Blog_refreshToken", res.data.data.refreshToken);
      navigate("/about");
      window.location.reload();
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
