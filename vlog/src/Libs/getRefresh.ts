import axios, { AxiosRequestConfig } from "axios";
import { type } from "os";
import { customAxios } from "./CustomAxois";

export const getRefresh = async (config: AxiosRequestConfig) => {
  let accessToken: string = localStorage.getItem("Blog_accessToken") ?? "";
  if (typeof accessToken === "string") {
    config.headers.common["Authorization"] = accessToken;
  }
  return config;
};
