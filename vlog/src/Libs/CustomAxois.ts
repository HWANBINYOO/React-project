import axios, { AxiosInstance } from "axios";
import { getRefresh } from "./getRefresh";

export const customAxios: AxiosInstance = axios.create({
  baseURL: `http://192.168.137.97:3000`,
});

customAxios.interceptors.request.use(getRefresh);
