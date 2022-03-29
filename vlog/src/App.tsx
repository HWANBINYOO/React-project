import { Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import ProfilePage from "./Page/ProfilePage";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage HeaderColor="blue" />} />
        <Route path="/profile" element={<ProfilePage HeaderColor="red" />} />
      </Routes>
    </>
  );
}

export default App;
