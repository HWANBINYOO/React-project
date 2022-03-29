import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import ProfilePage from "./Page/ProfilePage";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage HeaderColor="blue" />} />
        <Route path="/profile" element={<ProfilePage HeaderColor="purple" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
