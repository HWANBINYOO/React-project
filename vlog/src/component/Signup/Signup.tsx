import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Styled";

const Signup: React.FC = () => {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const navigate = useNavigate();
  const signupData = [
    {
      Email: Email,
      Password: PassWord,
    },
  ];

  const onSignup = async () => {
    try {
      console.log(Email, PassWord);
      if (Email === "") return alert("이메일이 입력되지 않았어요");
      else if (PassWord === "") return alert("패스워드가 입력되지 않았어요");
      const { data } = await axios.post("/blog/register", signupData);
      console.log(data);
      navigate("/login");
    } catch (a: any) {
      console.log(a);
    }
  };

  return (
    <>
      <S.Login>
        <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
          <S.LoginTitle>회원가입</S.LoginTitle>
        </Link>
        <S.SignupInput>
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email을 입력하세요"
          />
        </S.SignupInput>
        <S.SignupInput>
          <p>PassWord</p>
          <input
            type="password"
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
