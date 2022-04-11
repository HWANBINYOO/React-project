import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import ProjectPage from "./Page/ProjectPage";
import { GlobalStyle } from "./style/GlobalStyle";
import AboutPage from "./Page/AboutPage";
import BlogPage from "./Page/BlogPage";
import BlogInPage from "./Page/BlogInPage";
import BlogAddPage from "./Page/BlogAddPage";
import LoginPage from "./Page/LoginPage";
import SignupPage from "./Page/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route
          path="/project"
          element={
            <ProjectPage
              id={0}
              name={""}
              term={""}
              cost={0}
              Ido={""}
              imgSrc={""}
            />
          }
        />
        <Route
          path="/blog"
          element={
            <BlogPage BlogImg={""} date={""} title={""} desc={""} id={0} />
          }
        />
        <Route path="/:id" element={<BlogInPage />} />
        <Route path="/blogadd" element={<BlogAddPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
