/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../../config/config";
import { customAxios } from "../../Libs/CustomAxois";
import * as S from "./Styled";

const Signup = () => {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [PassWordCheck, setPassWordCheck] = useState("");
  const navigate = useNavigate();

  const onSignup = async () => {
    try {
      if (Email === "") return console.log("이메일이 입력되지 않았어요!");
      else if (PassWord === "")
        return console.log("패스워드가 입력되지 않았어요!");
      else if (PassWord !== PassWordCheck)
        return console.log("패스워드가 일치하지 않아요");
      const { data } = await axios.post(`${baseURL}/user/`, {
        email: Email,
        password: PassWord,
      });
      console.log(data);
      navigate("/signIn");
    } catch (e: any) {
      if (e.response) {
        const { data } = e.response;
        console.error("data : ", data);
        // console.error(data.message);
      }
    }
  };
  return (
    <>
      <S.Positioner>
        <S.SigninBox>
          <S.TitleWapper>
            <img src={"/img/Wear.png"} />
            <S.Title>회원가입</S.Title>
          </S.TitleWapper>
          <S.ContentWapper>
            <S.inputBox>
              <input
                placeholder="ID/Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </S.inputBox>
          </S.ContentWapper>
          <S.ContentWapper>
            <S.inputBox className="underbar">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassWord(e.target.value)}
              />
            </S.inputBox>
            <S.inputBox className="topbar">
              <input
                type="password"
                placeholder="Password check"
                onChange={(e) => setPassWordCheck(e.target.value)}
              />
            </S.inputBox>
          </S.ContentWapper>
          <S.Btn onClick={() => onSignup()}>회원가입</S.Btn>
          <S.Decs>
            <S.Id>이미 계정을 갖고 계시다구요?</S.Id>
            <Link
              to="/signIn"
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

export default Signup;
