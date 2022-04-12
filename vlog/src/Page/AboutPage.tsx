import React from "react";
import Header from "../component/Header/Header";
import Title from "../component/Title/Title";
import About from "../component/About/About";
import { useRecoilState } from "recoil";
import { BlogHeaderColor } from "../recoil/HeaderColor";
import Logout from "../component/ProjectButton/Logout/Logout";

// interface Homes {
//   HeaderColor: string;
// }

// export default function AboutPage({ HeaderColor }: Homes) {
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
