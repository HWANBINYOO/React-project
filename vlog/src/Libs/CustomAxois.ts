import axios, { AxiosInstance } from "axios";
import { getRefresh } from "./getRefresh";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "http://3.39.22.104",
});

customAxios.interceptors.request.use(getRefresh);
