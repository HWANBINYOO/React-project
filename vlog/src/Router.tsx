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
  ProfilePage,
  ProfileEditPage,
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
        path="/board"
        element={
          <PrivateRoute>
            <BlogPage
              title={""}
              date={""}
              content={""}
              user_name={""}
              board_id={"0"}
              user_id={0}
            />
          </PrivateRoute>
        }
      />
      <Route
        path="board/:id"
        element={
          <PrivateRoute>
            <BlogInPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/boardadd"
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
      <Route
        path="/profile/:user_id"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile/Edit"
        element={
          <PrivateRoute>
            <ProfileEditPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default Router;
