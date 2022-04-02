import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import ProjectPage from "./Page/ProjectPage";
import { GlobalStyle } from "./style/GlobalStyle";
import AboutPage from "./Page/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage HeaderColor="blue" />} />
        <Route path="/About" element={<AboutPage HeaderColor="purple" />} />
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
              alength={0}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
