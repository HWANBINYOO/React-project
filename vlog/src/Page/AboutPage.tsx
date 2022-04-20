import React from "react";
import { Header, About, Title, Logout } from "../component";
import { useRecoilState } from "recoil";
import { BlogHeaderColor } from "../recoil/headerColor";

export default function AboutPage() {
  const [HeaderColor, setHeaderColor] = useRecoilState(BlogHeaderColor);
  setHeaderColor("purple");
  return (
    <>
      <Title />
      <Logout />
      <Header HeaderColor={HeaderColor} />
      <About />
    </>
  );
}
