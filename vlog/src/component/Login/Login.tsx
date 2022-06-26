import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./Styled";
import { toast } from "react-toastify";
import { loginRequest } from "../../Api/member";

const Login = () => {
  const [Email, setEmail] = useState<string>("");
  const [PassWord, setPassWord] = useState<string>("");
  const navigate = useNavigate();

  const onLogin = async () => {
    if (Email === "") {
      return toast.warning("이메일을 입력해주세요!!");
    } else if (PassWord === "") {
      return toast.warning("비밀번호를 입력해주세요!");
    }
    const { data }: any = await loginRequest(Email, PassWord);

    localStorage.setItem("Blog_accessToken", data.accessToken);
    localStorage.setItem("Blog_refreshToken", data.refreshToken);
    toast.success("로그인 되었습니다!");
    navigate("/board");
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email을 입력하세요"
          />
        </S.LoginInput>
        <S.LoginInput>
          <p>PassWord</p>
          <input
            type="password"
            onChange={(e) => setPassWord(e.target.value)}
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
