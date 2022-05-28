import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Styled";
import { toast } from "react-toastify";
import { customAxios } from "../../Libs/CustomAxois";
import Cookies from "universal-cookie";

const Login = () => {
  const cookies = new Cookies();
  const [Email, setEmail] = useState<string>("");
  const [PassWord, setPassWord] = useState<string>("");
  const navigate = useNavigate();
  const JWT_EXPIRY_TIME = 3 * 3600 * 1000;

  const onChangeEmail = (e: any) => {
    setEmail(e.currentTarget.value);
  };
  const onChangePassWord = (e: any) => {
    setPassWord(e.currentTarget.value);
  };

  const onLogin = async () => {
    console.log(Email, PassWord);
    try {
      const { data } = await customAxios.post("user/login", {
        email: Email,
        password: PassWord,
      });
      onLoginSuccess(data.accessToken);
      console.log(data);
      localStorage.setItem("Blog_accessToken", data.accessToken);
      localStorage.setItem("Blog_refreshToken", data.refreshToken);

      toast.success("로그인 되었습니다!");
      navigate("/about");
    } catch (e: any) {
      const { data } = e.response;
      console.error(data.message);
      toast.error("다시 확인해주세요");
    }
  };

  const onSilentRefresh = (accessToken: undefined) => {
    try {
      customAxios.post("/silent-refresh", accessToken);
    } catch (e: any) {
      const { data } = e.response;
      console.error(data.message);
      toast.error("다시 확인해주세요");
    }
  };

  // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
  const onLoginSuccess = (accessToken: undefined) => {
    // accessToken 설정
    customAxios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    // accessToken 만료하기 1분 전에 로그인 연장
    setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
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
