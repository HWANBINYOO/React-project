import { MemberController } from "../utils/Libs/urls";
import { LoginType } from "../types";
import { customAxios } from "../utils/Libs/CustomAxois";
import { toast } from "react-toastify";

export const LoginRequest = async (email: string, password: string) => {
  try {
    const { data } = await customAxios.post("user/login", {
      email: email,
      password: password,
    });
    customAxios.defaults.headers.common["Authorization"] = data.accessToken;
    customAxios.defaults.headers.common["RefreshToken"] = data.refreshToken;
    return { data };
  } catch (e: any) {
    const { data } = e.response;
    console.error(data.message);
    toast.error(data.message);
  }
};

export const SignupRequest = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const { data } = await customAxios.post("/user/register", {
      name: name,
      email: email,
      password: password,
    });
  } catch (e: any) {
    console.log(e);
    if (e.response) {
      const { data } = e.response;
      console.error(data.message);
      console.error("data : ", data);
    }
  }
};
