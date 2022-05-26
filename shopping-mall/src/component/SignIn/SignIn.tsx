/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { customAxios } from "../../Libs/CustomAxois";
import * as S from "./Styled";

const SignIn = () => {
  const [Email, setEmail] = useState<string>("");
  const [PassWord, setPassWord] = useState<string>("");
  const navigate = useNavigate();

  const onLogin = async () => {
    try {
      console.log(Email, PassWord);
      const { data } = await customAxios.post("/login", {
        email: Email,
        password: PassWord,
      });

      console.log(data);
      const { accessToken } = data;
      // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
      customAxios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${accessToken}`;

      navigate("/about");
    } catch (e: any) {
      if (e.message === "Request failed with status code 400") {
        if (e.response) {
          const { data } = e.response;
          console.error("data : ", data);
          console.error(data.message);
        }
      } else if (e.message === "Request failed with status code 404") {
        if (e.response) {
          const { data } = e.response;
          console.error("data : ", data);
          console.error(data.message);
        }
      }
    }
  };

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
