import React from "react";
import Header from "../component/Header/Header";
import Home from "../component/Home/Home";

interface Homes {
  HomeColor: string;
}

export default function HeaderPage({ HomeColor }: Homes) {
  return (
    <>
      <Header HomeColor={HomeColor} />
      <Home />
    </>
  );
}
