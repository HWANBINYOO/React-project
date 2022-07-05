/* eslint-disable react-hooks/rules-of-hooks */
import { AxiosRequestConfig } from "axios";
import { useCookies } from "react-cookie";

export const getRefresh = async (config: AxiosRequestConfig) => {
  const [cookies, setCookie] = useCookies(["AccessToken", "RefreshToken"]);
  let accessToken = cookies.AccessToken ?? "";
  let refeshToken = cookies.RefreshToken ?? "";
  if (config.headers) {
    config.headers["Authorization"] = accessToken;
    config.headers["RefreshToken"] = refeshToken;
  }
  return config;
};
