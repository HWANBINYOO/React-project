import { getCookie } from "./Cookies";

const isLogin = () => !!getCookie("refreshToken");

export default isLogin;
