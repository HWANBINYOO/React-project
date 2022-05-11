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
  const onChangeEmail = (e: any) => {
    setEmail(e.currentTarget.value);
  };
  const onChangePassWord = (e: any) => {
    setPassWord(e.currentTarget.value);
  };
  return (
    <>
      <S.Positioner>
        <S.Title>Search</S.Title>
        <S.SigninBox>
          <S.inputBox>
            <input placeholder="email" onChange={onChangeEmail} />
          </S.inputBox>
          <S.inputBox>
            <input placeholder="password" onChange={onChangePassWord} />
          </S.inputBox>
          <S.Btn onClick={() => onLogin()}>Sign in</S.Btn>
        </S.SigninBox>
      </S.Positioner>
    </>
  );
};

export default SignIn;
