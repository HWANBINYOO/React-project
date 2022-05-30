import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  SignInPage,
  SignUpPage,
  ProfilePage,
  KindPage,
} from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SignIn" element={<SignInPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/Profile" element={<ProfilePage />} />
      <Route path="/Kind/:name" element={<KindPage />} />
      <Route path="/Kind/:name/:id" element={<KindPage />} />
    </Routes>
  );
};

export default Router;
