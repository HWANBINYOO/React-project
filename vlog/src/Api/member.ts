import { MemberController } from "../utils/Libs/urls";
import { customAxios } from "../Libs/CustomAxois";
import { toast } from "react-toastify";

export const loginRequest = async (email: string, password: string) => {
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

export const signupRequest = async (
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
    const { data } = e.response;
    console.error(data.message);
    console.error("data : ", data);
  }
};

export const profileReqeuset = async (user_id: string) => {
  try {
    const { data } = await customAxios.get(MemberController.profile(user_id));
    return { data };
  } catch (e: any) {
    const { data } = e.response;
    console.error(data.message);
    console.error("data : ", data);
  }
};

export const myProfileImgReqeuset = async (user_id: string) => {
  try {
    const { data } = await customAxios.get(
      MemberController.profileImg(user_id)
    );
    return { data };
  } catch (e: any) {
    const { data } = e.response;
    console.error(data.message);
    console.error("data : ", data);
  }
};

export const profileimgUpdateReqeuset = async () => {
  try {
    await customAxios.patch(MemberController.updateProfileimg(), {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (e: any) {
    const { data } = e.response;
    console.error(data.message);
    console.error("data : ", data);
  }
};

export const profileUpdageReqeuset = async (
  name: string,
  password: string,
  newPassword: string
) => {
  try {
    await customAxios.patch(MemberController.updateProfile(), {
      name: name,
      password: password,
      newPassword: newPassword,
    });
  } catch (e: any) {
    const { data } = e.response;
    console.error(data.message);
    console.error("data : ", data);
  }
};
