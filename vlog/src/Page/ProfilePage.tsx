import React from "react";
import Profile from "../component/Profile/Profile";
import Header from "../component/Header/Header";

interface Homes {
  HeaderColor: string;
}

export default function HeaderPage({ HeaderColor }: Homes) {
  return (
    <>
      <Header HeaderColor={HeaderColor} />
      <Profile />
    </>
  );
}
