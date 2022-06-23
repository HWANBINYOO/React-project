import React from "react";
import { Navigate } from "react-router-dom";
import isLogin from "./isLogin";

interface PrivateType {
  children: any;
}

const PrivateRoute = ({ children }: PrivateType) => {
  return isLogin() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
