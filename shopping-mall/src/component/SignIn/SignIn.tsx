import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styled";

const SignIn = () => {
  const [Email, setEmail] = useState<string>("");
  const [PassWord, setPassWord] = useState<string>("");
  const navigate = useNavigate();

  const onLogin = async () => {
    console.log(Email, PassWord);
    const { data } = await axios.post("/login", {
      email: Email,
      password: PassWord,
    });

    console.log(data);
    localStorage.setItem("Blog_accessToken", data.accessToken);
    localStorage.setItem("Blog_refreshToken", data.refreshToken);

    navigate("/about");
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
            <S.GoSignUp>여기서 가입</S.GoSignUp>
          </S.Decs>
        </S.SigninBox>
      </S.Positioner>
    </>
  );
};

export default SignIn;
