import React from "react";
import { useRecoilState } from "recoil";
import Header from "../component/Header/Header";
import Login from "../component/Login/Login";
import Title from "../component/Title/Title";
import { BlogHeaderColor } from "../recoil/HeaderColor";

const LoginPage: React.FC = () => {
  const [HeaderColor, setHeaderColor] = useRecoilState(BlogHeaderColor);
  setHeaderColor("blue");
  return (
    <>
      {/* <Title />
      <Header HeaderColor={HeaderColor} /> */}
      <Login />
    </>
  );
};

export default LoginPage;
