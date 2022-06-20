import axios, { AxiosInstance } from "axios";
import { getRefresh } from "./getRefresh";

export const customAxios: AxiosInstance = axios.create({
  baseURL: `http://1172.20.10.3:3000/`,
});

customAxios.interceptors.request.use(getRefresh);
