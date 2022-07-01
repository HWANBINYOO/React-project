import { MemberController } from "../Libs/url";
import { customAxios } from "../Libs/CustomAxois";
import { toast } from "react-toastify";

export const loginRequest = async (email: string, password: string) => {
  try {
    const { data } = await customAxios.post(MemberController.signin(), {
      email: email,
      password: password,
    });
    customAxios.defaults.headers.common["Authorization"] = data.accessToken;
    return { data };
  } catch (e: any) {
    // console.log(e.message);

    const { data } = e.response;
    console.error("data : ", data);
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
    console.error("data : ", data);
    toast.error(data.message);
  }
};

export const profileReqeuset = async (user_id: number | string) => {
  try {
    const { data } = await customAxios.get(MemberController.profile(user_id));
    return { data };
  } catch (e: any) {
    const { data } = e.response;
    console.error("data : ", data);
    toast.error(data.message);
  }
};

export const myProfileImgReqeuset = async (user_id: number | string) => {
  try {
    const { data } = await customAxios.get(
      MemberController.profileImg(user_id)
    );
    return { data };
  } catch (e: any) {
    const { data } = e.response;
    console.error("data : ", data);
    toast.error(data.message);
  }
};

export const profileimgUpdateReqeuset = async (file: string) => {
  let formData = new FormData();
  formData.append("file", file);
  try {
    await customAxios.patch(MemberController.updateProfileimg(), formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    toast.success("수정되었습니다!");
  } catch (e: any) {
    const { data } = e.response;
    console.error("data : ", data);
    toast.error(data.message);
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
      password: "",
      newPassword: "",
    });
    toast.success("수정되었습니다!");
  } catch (e: any) {
    const { data } = e.response;
    console.error("data : ", data);
    toast.error(data.message);
  }
};
