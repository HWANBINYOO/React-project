import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  BlogAddPage,
  BlogInPage,
  BlogPage,
  HomePage,
  LoginPage,
  ProjectPage,
  SignupPage,
} from "./Page";

const Router = () => {
  return (
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
      <Route path="/register" element={<SignupPage />} />
    </Routes>
  );
};

export default Router;
