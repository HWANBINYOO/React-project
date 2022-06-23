import { MemberController } from "../utils/Libs/urls";
import { LoginType } from "../types";
import { customAxios } from "../Libs/CustomAxois";
import { toast } from "react-toastify";

export const LoginRequest = async (email: string, password: string) => {
  try {
    const { data } = await customAxios.post(MemberController.signin(), {
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
    const { data } = await customAxios.post(MemberController.signup(), {
      name: name,
      email: email,
      password: password,
    });
    return { data };
  } catch (e: any) {
    console.log(e);
    if (e.response) {
      const { data } = e.response;
      console.error(data.message);
      console.error("data : ", data);
    }
  }
};

export const ProfileReqeuset = async () => {};
