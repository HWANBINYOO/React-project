import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./Styled";

const Signup = () => {
  const [Email, setEmail] = useState<string>("");
  const [PassWord, setPassWord] = useState<string>("");

  const onChangeEmail = (e: any) => {
    setEmail(e.currentTarget.value);
    console.log(Email);
  };
  const onChangePassWord = (e: any) => {
    console.log(e.target.value);
    setPassWord(e.currentTarget.value);
  };

  axios
    .post(
      "/blog/",
      {
        Email: Email,
        Password: PassWord,
      }
      // {
      //   headers: { "Content-Type": "application/json" },
      // }
    )
    .then((res) => {
      console.log(res);
    })
    .catch((error: any) => {
      console.log(error);
    });

  return (
    <>
      <S.Login>
        <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
          <S.LoginTitle>회원가입</S.LoginTitle>
        </Link>
        <S.SignupInput>
          <p>Email</p>
          <input
            type="password"
            onChange={onChangeEmail}
            placeholder="Email을 입력하세요"
          />
        </S.SignupInput>
        <S.SignupInput>
          <p>PassWord</p>
          <input
            onChange={onChangePassWord}
            placeholder="PassWord을 입력하세요"
          />
        </S.SignupInput>
        <S.LoginButton>Signup</S.LoginButton>
      </S.Login>
    </>
  );
};

export default Signup;
