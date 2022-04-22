import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, Title } from "../component";

import isLogin from "../Libs/isLogin";

export default function HomePage() {
  const navigate = useNavigate();
  isLogin() ? navigate("/about") : navigate("/");

  return (
    <>
      <Title />
      {/* 만약 로그인이 됬다면 바로 about 페이지로 가게하기 */}

      <Home />
    </>
  );
}
