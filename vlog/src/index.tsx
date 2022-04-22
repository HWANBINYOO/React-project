import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";
import reportWebVitals from "./reportWebVitals";
import { Slide, toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ToastContainer
        position={toast.POSITION.TOP_RIGHT}
        transition={Slide}
        autoClose={1500}
      />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
