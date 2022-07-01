import axios, { AxiosRequestConfig } from "axios";
import { customAxios } from "./CustomAxois";

export const getRefresh = async (config: AxiosRequestConfig) => {
  let accessToken = localStorage.getItem("Blog_accessToken") ?? "";
  let refeshToken = localStorage.getItem("Blog_refreshToken") ?? "";
  const nowDate = new Date().getTime() / 1000;

  if (config.headers) {
    config.headers["Authorization"] = accessToken;
  }

  if (9999999999999 < nowDate) {
    try {
      const { data } = await axios.put(`https://server.dev-log.kr/refresh`, {
        headers: {
          Authorization: "",
          RefreshToken: localStorage.getItem("Dotori_refreshToken"),
        },
      });
      config.headers["Authorization"] = await data.data.NewAccessToken;

      localStorage.setItem("Blog_accessToken", data.data.NewAccessToken);
      localStorage.setItem("Blog_refreshToken", data.data.NewRefreshToken);
    } catch (e: any) {
      if (e.message === "Request failed with status code 401") {
        alert("로그아웃 되었어요");
        localStorage.removeItem("Blog_accessToken");
        localStorage.removeItem("Blog_refreshToken");
        window.location.replace("/");
      }
    }
  }
  return config;
};
