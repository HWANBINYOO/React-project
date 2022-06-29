import axios, { AxiosInstance } from "axios";
import { getRefresh } from "./getRefresh";

export const customAxios: AxiosInstance = axios.create({
  baseURL: "https://dev-log.kr/",
});

customAxios.interceptors.request.use(getRefresh);
