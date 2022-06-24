import axios, { AxiosInstance } from "axios";
import { getRefresh } from "./getRefresh";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "http://10.53.68.174:8080",
});

customAxios.interceptors.request.use(getRefresh);
