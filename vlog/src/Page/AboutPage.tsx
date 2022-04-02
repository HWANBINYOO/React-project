import React from "react";
import Header from "../component/Header/Header";
import Title from "../component/Title/Title";
import About from "../component/About/About";

interface Homes {
  HeaderColor: string;
}

export default function HeaderPage({ HeaderColor }: Homes) {
  return (
    <>
      <Title />
      <Header HeaderColor={HeaderColor} />
      <About />
    </>
  );
}
