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
          <PrivateRoute>
            <ProjectPage
              id={0}
              name={""}
              term={""}
              cost={0}
              Ido={""}
              imgSrc={""}
            />
          </PrivateRoute>
        }
      />
      <Route
        path="/blog"
        element={
          <PrivateRoute>
            <BlogPage BlogImg={""} date={""} title={""} desc={""} id={0} />
          </PrivateRoute>
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
