import axios, { AxiosInstance } from "axios";
import { getRefresh } from "./getRefresh";

export const customAxios: AxiosInstance = axios.create({
  baseURL: `http://13.209.22.66`,
});

customAxios.interceptors.request.use(getRefresh);
