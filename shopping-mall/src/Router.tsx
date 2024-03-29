import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  SignInPage,
  SignUpPage,
  ProfilePage,
  KindPage,
  KindInPage,
  OrderPage,
  ShoppingPage,
} from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SignIn" element={<SignInPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/Profile" element={<ProfilePage />} />
      <Route path="/Shopping" element={<ShoppingPage />} />
      <Route path="/Kind/:name" element={<KindPage />} />
      <Route path="/Kind/:name/:id" element={<KindInPage />} />
      <Route path="/Buy/:id" element={<OrderPage />} />
    </Routes>
  );
};

export default Router;
