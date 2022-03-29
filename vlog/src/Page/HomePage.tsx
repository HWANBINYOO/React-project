import React from "react";
import Header from "../component/Header/Header";
import Home from "../component/Home/Home";

interface Homes {
  HeaderColor: string;
}

export default function HeaderPage({ HeaderColor }: Homes) {
  return (
    <>
      <Header HeaderColor={HeaderColor} />
      <Home />
    </>
  );
}
