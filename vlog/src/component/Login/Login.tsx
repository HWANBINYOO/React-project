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
      const { accessToken } = data;
      const { refreshToken } = data;
      customAxios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;

      // cookies.set("cookie", refreshToken, {
      //   path: "/",
      //   expires: Math.floor(Date.now() / 1000) + 60 * 60,
      // });

      console.log(data);
      // localStorage.setItem("Blog_accessToken", data.accessToken);
      // localStorage.setItem("Blog_refreshToken", data.refreshToken);

      toast.success("로그인 되었습니다!");
      navigate("/about");
    } catch (e: any) {
      const { data } = e.response;
      console.error(data.message);
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
