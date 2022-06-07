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
  const [ACCESS_TOKEN, setACCESS_TOKEN] = useState("");
  const [REFRESH_TOKEN, setREFRESH_TOKEN] = useState("");

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

      setACCESS_TOKEN(data.accessToken);
      setREFRESH_TOKEN(data.refreshToken);

      customAxios.defaults.headers.common[
        "Authorization"
      ] = `${data.accessToken}`;
      customAxios.defaults.headers.common["RefreshToken"] = data.refreshToken;

      localStorage.setItem("Blog_accessToken", data.accessToken);
      localStorage.setItem("Blog_refreshToken", data.refreshToken);
      console.log(localStorage.getItem("Blog_accessToken"));

      toast.success("로그인 되었습니다!");
      navigate("/about");
    } catch (e: any) {
      const { data } = e.response;
      console.error(data.message);
      toast.error("다시 확인해주세요");
    }
  };

  const onSilentRefresh = async () => {
    try {
      const { data } = await customAxios.post("/silent-refresh", {
        accessToken: ACCESS_TOKEN,
        refreshToken: REFRESH_TOKEN,
      });
      setREFRESH_TOKEN(data.accessToken);
      setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
    } catch (e: any) {
      const { data } = e.response;
      console.error(data.message);
      toast.error("다시 확인해주세요");
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
