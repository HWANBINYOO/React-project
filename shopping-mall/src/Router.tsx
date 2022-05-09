import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage, ProfilePage } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SignIn" element={<SignInPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default Router;
