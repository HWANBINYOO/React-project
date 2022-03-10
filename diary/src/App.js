import React from "react";
import MainPage from "./MainPage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  @font-face {
    font-family: "LeeSeoyun";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2202-2@1.0/LeeSeoyun.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <MainPage />
    </>
  );
}

export default App;
