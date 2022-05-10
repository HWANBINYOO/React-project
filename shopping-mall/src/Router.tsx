import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage, ProfilePage } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SignIn" element={<SignInPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/Profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default Router;
