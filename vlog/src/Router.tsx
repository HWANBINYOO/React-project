import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "./Libs/PublicRoute";
import PrivateRoute from "./Libs/PrivateRoute";
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
      <Route
        path="/"
        element={
          <PublicRoute restricted={true}>
            <HomePage />
          </PublicRoute>
        }
      />
      <Route
        path="/About"
        element={
          <PrivateRoute>
            <AboutPage />
          </PrivateRoute>
        }
      />
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
      <Route
        path="/:id"
        element={
          <PrivateRoute>
            <BlogInPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/blogadd"
        element={
          <PrivateRoute>
            <BlogAddPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/Login"
        element={
          <PublicRoute restricted={true}>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute restricted={true}>
            <SignupPage />
          </PublicRoute>
        }
      />
    </Routes>
  );
};

export default Router;
