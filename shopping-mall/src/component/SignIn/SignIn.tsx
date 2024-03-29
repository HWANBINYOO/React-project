/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Styled";
// import { useCookies } from "react-cookie";
import axios from "axios";
import { baseURL } from "../../config/config";

const SignIn = () => {
  const [Email, setEmail] = useState<string>("");
  const [PassWord, setPassWord] = useState<string>("");
  const navigate = useNavigate();
  // const [cookies, setCookie] = useCookies(["AccessToken", "RefreshToken"]);

  const onLogin = async () => {
    try {
      const { data } = await axios.post(`${baseURL}/login/`, {
        email: Email,
        password: PassWord,
      });
      console.log(data);

      // customAxios.defaults.headers.common["Authorization"] = `${data.accessToken}`;
      // customAxios.defaults.headers.common["RefreshToken"] = `${data.refreshToken}`;


      // setCookie("AccessToken", data.accessToken, {
      //   path: "/accessToken",
      //   secure: true,
      //   sameSite: "none",
      // });
      // setCookie("RefreshToken", data.refreshToken, {
      //   path: "/refreshToken",
      //   secure: true,
      //   sameSite: "none",
      // });

      navigate("/");
    } catch (e: any) {
      console.error(e.message);
    }
  };
  // accessToken 토큰 재발급 요청

  return (
    <>
      <S.Positioner>
        <S.SigninBox>
          <S.TitleWapper>
            <img src={"/img/Wear.png"} />
            <S.Title>로그인</S.Title>
          </S.TitleWapper>
          <S.ContentWapper>
            <S.inputBox>
              <input
                placeholder="ID/Email"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </S.inputBox>
            <span>id 가 기억나지 않으세요?</span>
          </S.ContentWapper>
          <S.ContentWapper>
            <S.inputBox>
              <input
                placeholder="Password"
                onChange={(e) => setPassWord(e.currentTarget.value)}
              />
            </S.inputBox>
            <span>비밀번호를 잊으셨나요?</span>
          </S.ContentWapper>
          <S.Btn onClick={() => onLogin()}>로그인</S.Btn>
          <S.Decs>
            <S.Id>ID 가 없으세요?</S.Id>
            <Link
              to="/signUp"
              style={{ textDecoration: "none", color: "black" }}
            >
              <S.GoSignUp>여기서 가입</S.GoSignUp>
            </Link>
          </S.Decs>
        </S.SigninBox>
      </S.Positioner>
    </>
  );
};

export default SignIn;
