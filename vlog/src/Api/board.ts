import { MemberController } from "../Libs/url";
import { customAxios } from "../Libs/CustomAxois";
import { toast } from "react-toastify";

export const myboardsReqeuset = async (user_id: number) => {
  try {
    const { data } = await customAxios.get(MemberController.myBoards(user_id));
    return { data };
  } catch (e: any) {
    const { data } = e.response;
    console.error(data.message);
    console.error("data : ", data);
  }
};
