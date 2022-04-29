import React, { useEffect } from "react";
import { Header, About, Title, HeaderRIght } from "../component";
import { useRecoilState } from "recoil";
import { BlogHeaderColor } from "../recoil/HeaderColorr";

export default function AboutPage() {
  return (
    <>
      <Title />
      <HeaderRIght />
      <Header HeaderColor={"purple"} />
      <About />
    </>
  );
}
