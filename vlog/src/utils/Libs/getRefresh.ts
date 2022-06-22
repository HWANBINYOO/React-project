import axios, { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { customAxios } from "./CustomAxois";

export const getRefresh = async (config: AxiosRequestConfig) => {
  let accessToken = localStorage.getItem("Blog_accessToken") ?? "";
  useEffect(() => {
    console.log(accessToken);
  }, []);

  if (config.headers) config.headers["Authorization"] = accessToken;
  return config;
};
