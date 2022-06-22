import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { customAxios } from "../../utils/Libs/CustomAxois";
import { toast } from "react-toastify";
import * as S from "./Styled";

const Signup: React.FC = () => {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [Name, setName] = useState("");
  const navigate = useNavigate();

  const onSignup = async () => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    try {
      if (Email === "") return toast.warning("이메일이 입력되지 않았어요!");
      // else if (!emailRegex.test(Email)) {
      //   return toast.warning("이메일 형식이 잘못됬어요!");
      // }
      else if (PassWord === "")
        return toast.warning("패스워드가 입력되지 않았어요!");
      const { data } = await customAxios.post("/user/register", {
        name: Name,
        email: Email,
        password: PassWord,
      });

      toast.success("회원가입이 되었습니다!");
      console.log(data);
      navigate("/login");
    } catch (e: any) {
      console.log(e);
      if (e.response) {
        const { data } = e.response;
        console.error(data.message);
        console.error("data : ", data);
      }
      if (e.message === "Request failed with status code 400") {
        if (e.response) {
          const { data } = e.response;
          console.error(data.message);
          toast.warning(data.message);
          console.error("data : ", data);
        }
      }
    }
  };

  return (
    <>
      <S.Login>
        <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
          <S.LoginTitle>회원가입</S.LoginTitle>
        </Link>
        <S.SignupInput>
          <p>Email</p>
          <input
            type="text"
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
        <S.SignupInput>
          <p>name</p>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력하세요"
          />
        </S.SignupInput>
        <S.LoginButton
          onClick={() => {
            onSignup();
          }}
        >
          Signup
        </S.LoginButton>
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <p>로그인하러가기</p>
        </Link>
      </S.Login>
    </>
  );
};

export default Signup;
