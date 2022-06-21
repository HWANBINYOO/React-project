import axios, { AxiosInstance } from "axios";
import { getRefresh } from "./getRefresh";

export const customAxios: AxiosInstance = axios.create({
  baseURL: `http://10.120.74.59:3000/`,
});

customAxios.interceptors.request.use(getRefresh);
