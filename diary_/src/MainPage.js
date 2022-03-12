import React from "react";
import Dontent from "./content/Dontent";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Pickture from "./Pickture/Pickture";

const MainPage = () => {
  return (
    <>
      <Header />
      <Pickture />
      <Dontent />
      <Footer />
    </>
  );
};

export default MainPage;
