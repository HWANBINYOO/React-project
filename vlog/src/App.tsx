import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Slide, toast, ToastContainer } from "react-toastify";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ToastContainer
          position={toast.POSITION.TOP_RIGHT}
          transition={Slide}
          autoClose={1500}
        />
        <Router />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
