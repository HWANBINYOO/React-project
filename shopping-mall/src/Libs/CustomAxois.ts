import axios, { AxiosInstance } from "axios";
import { baseURL } from "../config/config";
import { getRefresh } from "./getRefresh";

export const customAxios: AxiosInstance = axios.create({
  baseURL: baseURL,
});

customAxios.interceptors.request.use(getRefresh);
