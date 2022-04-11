import React from "react";
import { useRecoilState } from "recoil";
import { Footer } from "../component/Footer/Styled";
import Header from "../component/Header/Header";
import Home from "../component/Home/Home";
import Title from "../component/Title/Title";
import { BlogHeaderColor } from "../recoil/HeaderColor";

// interface Homes {
//   HeaderColor: string;
// }

// export default function HomePage({ HeaderColor }: Homes) {
export default function HomePage() {
  const [HeaderColor, setHeaderColor] = useRecoilState(BlogHeaderColor);
  setHeaderColor("blue");
  return (
    <>
      <Title />
      <Header HeaderColor={HeaderColor} />
      <Home />
      <Footer />
    </>
  );
}
