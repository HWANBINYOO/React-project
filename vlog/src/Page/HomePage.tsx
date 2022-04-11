import React from "react";
import { Link } from "react-router-dom";
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
  // const [HeaderColor, setHeaderColor] = useRecoilState(BlogHeaderColor);
  // setHeaderColor("blue");
  return (
    <>
      <Title />
      {/* <Header HeaderColor={HeaderColor} /> */}
      <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
        <Home />
      </Link>
      {/* <Footer /> */}
    </>
  );
}
