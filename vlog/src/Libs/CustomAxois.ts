import axios, { AxiosInstance } from "axios";
import { getRefresh } from "./getRefresh";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "http://13.125.207.232",
});

customAxios.interceptors.request.use(getRefresh);
