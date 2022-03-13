import React from "react";
import Dcontent from "../content/Dontent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Pickture from "../Pickture/Pickture";

const MainPage = () => {
  return (
    <>
      <Header />
      <Pickture />
      <Dcontent />
      <Footer />
    </>
  );
};

export default MainPage;
