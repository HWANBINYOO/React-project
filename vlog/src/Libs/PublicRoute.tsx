import React from "react";
import { Navigate } from "react-router-dom";
import isLogin from "./isLogin";

interface PublicType {
  restricted: boolean;
  children: any;
}

const PublicRoute = ({ restricted, children }: PublicType) => {
  return isLogin() && restricted ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
