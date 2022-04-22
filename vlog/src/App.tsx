import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyle";
import { RecoilRoot } from "recoil";
import { Slide, toast, ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <GlobalStyle />
        <ToastContainer
          position={toast.POSITION.TOP_RIGHT}
          transition={Slide}
          autoClose={1500}
        />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
