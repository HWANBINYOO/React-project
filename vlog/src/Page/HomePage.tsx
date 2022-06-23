import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, Title } from "../component";

import isLogin from "../Libs/isLogin";

export default function HomePage() {
  const navigate = useNavigate();
  isLogin() ? navigate("/board") : navigate("/");

  return (
    <>
      <Title />
      <Home />
    </>
  );
}
