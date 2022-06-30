import axios, { AxiosRequestConfig } from "axios";
import { customAxios } from "./CustomAxois";

export const getRefresh = async (config: AxiosRequestConfig) => {
  let accessToken = localStorage.getItem("Blog_accessToken") ?? "";
  if (config.headers) {
    config.headers.common["Authorization"] = accessToken;
  }

  return config;
};
