import React from "react";
import "./App.css";
import CalculatorPage from "./page/Calculator";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <CalculatorPage />
    </>
  );
}

export default App;
