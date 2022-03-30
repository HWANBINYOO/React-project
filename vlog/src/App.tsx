import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import ProfilePage from "./Page/ProfilePage";
import ProjectPage from "./Page/ProjectPage";
import { GlobalStyle } from "./style/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage HeaderColor="blue" />} />
        <Route path="/profile" element={<ProfilePage HeaderColor="purple" />} />
        <Route
          path="/project"
          element={
            <ProjectPage
              HeaderColor="yellow"
              id={0}
              name={""}
              term={0}
              cost={0}
              Ido={""}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
