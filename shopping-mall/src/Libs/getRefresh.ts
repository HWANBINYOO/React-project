import axios, { AxiosRequestConfig } from "axios";
import { useCookies } from "react-cookie";

export const getRefresh = async (config: AxiosRequestConfig) => {
  const [cookies, setCookie] = useCookies(["AccessToken", "RefreshToken"]);
  let accessToken = cookies.AccessToken ?? "";
  let refeshToken = cookies.RefreshToken ?? "";
  const nowDate = new Date().getTime() / 1000;

  if (config.headers) {
    config.headers["Authorization"] = accessToken;
    config.headers["Authorization"] = refeshToken;
  }

  if (9999999999999 < nowDate) {
    try {
      const { data } = await axios.put(`https://server.dev-log.kr/refresh`, {
        headers: {
          Authorization: "",
          RefreshToken: localStorage.getItem("Blog_refreshToken"),
        },
      });
      if (config.headers) {
        config.headers["Authorization"] = await data.data.NewAccessToken;
      }
      localStorage.setItem("Blog_accessToken", data.data.NewAccessToken);
      localStorage.setItem("Blog_refreshToken", data.data.NewRefreshToken);
    } catch (e: any) {
      if (e.message === "유효하지 않은 Token입니다.") {
        alert("로그아웃 되었어요");
        localStorage.removeItem("Blog_accessToken");
        localStorage.removeItem("Blog_refreshToken");
        window.location.replace("/");
      }
    }
  }
  return config;
};
