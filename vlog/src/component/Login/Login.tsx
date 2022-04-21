import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Styled";
import { toast } from "react-toastify";
import { customAxios } from "../../Libs/CustomAxois";

const Login = () => {
  const [Email, setEmail] = useState<string>("");
  const [PassWord, setPassWord] = useState<string>("");
  const navigate = useNavigate();

  const onChangeEmail = (e: any) => {
    setEmail(e.currentTarget.value);
  };
  const onChangePassWord = (e: any) => {
    setPassWord(e.currentTarget.value);
  };

  const loginData = [
    {
      Email: Email,
      Password: PassWord,
    },
  ];

  const onLogin = async () => {
    console.log(Email, PassWord);
    const { data } = await customAxios.post("/login", loginData);
    console.log(data);
    toast.warning("로그인 되었습니다");

    localStorage.setItem("Blog_accessToken", data.data.accessToken);
    localStorage.setItem("Blog_refreshToken", data.data.refreshToken);

    navigate("/about");
    window.location.reload();
  };

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
        <S.LoginButton onClick={() => onLogin()}>Login</S.LoginButton>
      </S.Login>
    </>
  );
};

export default Login;
