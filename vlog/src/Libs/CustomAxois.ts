import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getRefresh } from "./getRefresh";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "https://server.dev-log.kr/",
});

customAxios.interceptors.request.use(getRefresh);
