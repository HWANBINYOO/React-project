import { HashRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyle";
import { RecoilRoot } from "recoil";
import { Slide, toast, ToastContainer } from "react-toastify";
import Router from "./Router";

function App() {
  return (
    <HashRouter>
      <RecoilRoot>
        <GlobalStyle />
        <ToastContainer
          position={toast.POSITION.TOP_RIGHT}
          transition={Slide}
          autoClose={1500}
        />
        <Router />
      </RecoilRoot>
    </HashRouter>
  );
}

export default App;
