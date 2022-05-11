import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styled";

const Signup = () => {
  const [Email, setEmail] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [PassWord2, setPassWord2] = useState("");
  const [Name, setName] = useState("");
  const navigate = useNavigate();

  const onSignup = async () => {
    try {
      if (Email === "") return console.log("이메일이 입력되지 않았어요!");
      else if (PassWord === "")
        return console.log("패스워드가 입력되지 않았어요!");
      else if (PassWord !== PassWord2)
        return console.log("패스워드가 일치하지 않아요");
      const { data } = await axios.post("/user/register", {
        name: Name,
        email: Email,
        password: PassWord,
      });
      console.log("회원가입이 되었습니다!");
      console.log(data);
      navigate("/login");
    } catch (e: any) {
      if (e.message === "Request failed with status code 400") {
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
        <S.Title>Search</S.Title>
        <S.SigninBox>
          <S.inputBox>
            <input
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </S.inputBox>
          <S.EmailWapper>
            <S.EmailinputBox>
              <input
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </S.EmailinputBox>
            <button>check</button>
          </S.EmailWapper>
          <S.inputBox>
            <input
              placeholder="password"
              onChange={(e) => setPassWord(e.target.value)}
            />
          </S.inputBox>
          <S.inputBox>
            <input
              placeholder="password"
              onChange={(e) => setPassWord2(e.target.value)}
            />
          </S.inputBox>
          <S.Btn
            onClick={() => {
              onSignup();
            }}
          >
            Sign in
          </S.Btn>
        </S.SigninBox>
      </S.Positioner>
    </>
  );
};

export default Signup;
