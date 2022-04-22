import React from "react";
import { Navigate } from "react-router-dom";
import isLogin from "./isLogin";

const PublicRoute = ({ restricted }) => {
  return isLogin() && restricted ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
