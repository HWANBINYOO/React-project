import axios, { AxiosInstance } from "axios";
import { getRefresh } from "./getRefresh";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "http://52.79.227.100/",
});

customAxios.interceptors.request.use(getRefresh);
