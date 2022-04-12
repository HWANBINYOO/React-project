/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Styled";

interface LOGIN {
  setEmail: (Email: string) => void;
  setPassWord: (PassWord: string) => void;
}

const onSignup = () => {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const navigate = useNavigate();

  if (Email === "") return alert("이메일이 입력되지 않았어요");
  else if (PassWord === "") return alert("패스워드가 입력되지 않았어요");

  axios
    .post("/blog/Signup", {
      Email: Email,
      Password: PassWord,
    })
    .then((res) => {
      console.log(res);
      alert("회원가입이 되었습니다!");
      navigate("/login");
    })
    .catch((error: any) => {
      console.log(error);
    });

  return { setEmail, setPassWord };
};

const Signup: React.FC = () => {
  const { setEmail, setPassWord } = onSignup();
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email을 입력하세요"
          />
        </S.SignupInput>
        <S.SignupInput>
          <p>PassWord</p>
          <input
            onChange={(e) => setPassWord(e.target.value)}
            placeholder="PassWord을 입력하세요"
          />
        </S.SignupInput>
        <S.LoginButton
          onClick={() => {
            onSignup();
          }}
        >
          Signup
        </S.LoginButton>
      </S.Login>
    </>
  );
};

export default Signup;
