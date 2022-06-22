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

  const onLogin = async () => {
    try {
      const { data } = await customAxios.post("user/login", {
        email: Email,
        password: PassWord,
      });

      customAxios.defaults.headers.common["Authorization"] = data.accessToken;
      customAxios.defaults.headers.common["RefreshToken"] = data.refreshToken;

      localStorage.setItem("Blog_accessToken", data.accessToken);
      localStorage.setItem("Blog_refreshToken", data.refreshToken);

      toast.success("로그인 되었습니다!");
      navigate("/board");
    } catch (e: any) {
      const { data } = e.response;
      console.error(data.message);
      toast.error(data.message);
    }
  };

  return (
    <>
      <S.Login>
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <S.LoginTitle>로그인</S.LoginTitle>
        </Link>
        <S.LoginInput>
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email을 입력하세요"
          />
        </S.LoginInput>
        <S.LoginInput>
          <p>PassWord</p>
          <input
            type="password"
            onChange={(e) => setPassWord(e.currentTarget.value)}
            placeholder="PassWord을 입력하세요"
          />
        </S.LoginInput>
        <S.LoginButton onClick={() => onLogin()}>Login</S.LoginButton>
        <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
          <p>회원가입하거가기</p>
        </Link>
      </S.Login>
    </>
  );
};

export default Login;
