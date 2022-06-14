import axios, { AxiosRequestConfig } from "axios";
import { customAxios } from "./CustomAxois";

export const getRefresh = async (config: AxiosRequestConfig) => {
  let accessToken = localStorage.getItem("Dotori_accessToken") ?? "";
  customAxios.defaults.headers.common["Authorization"] = accessToken;
  return config;
};
