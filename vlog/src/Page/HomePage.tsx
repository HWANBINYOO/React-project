import React from "react";
import Header from "../component/Header/Header";
import Home from "../component/Home/Home";
import Title from "../component/Title/Title";

interface Homes {
  HeaderColor: string;
}

export default function HomePage({ HeaderColor }: Homes) {
  return (
    <>
      <Title />
      <Header HeaderColor={HeaderColor} />
      <Home />
    </>
  );
}
