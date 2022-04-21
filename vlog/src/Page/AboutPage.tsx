import React, { useEffect } from "react";
import { Header, About, Title, Logout } from "../component";
import { useRecoilState } from "recoil";
import { BlogHeaderColor } from "../recoil/HeaderColorr";

export default function AboutPage() {
  return (
    <>
      <Title />
      <Logout />
      <Header HeaderColor={"purple"} />
      <About />
    </>
  );
}
