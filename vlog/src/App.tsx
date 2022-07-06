import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Flip, toast, ToastContainer } from "react-toastify";
import Router from "./Router";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ToastContainer
          position={toast.POSITION.TOP_LEFT}
          transition={Flip}
          autoClose={900}
        />
        <Router />
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
