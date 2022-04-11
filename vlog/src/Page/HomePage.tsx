import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../component/Home/Home";
import Title from "../component/Title/Title";
import isLogin from "../Libs/isLogin";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Title />
      {/* 만약 로그인이 됬다면 바로 about 페이지로 가게하기 */}
      {!isLogin() ? navigate("/about") : navigate("/")}
      <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
        <Home />
      </Link>
      {/* <Footer /> */}
    </>
  );
}
