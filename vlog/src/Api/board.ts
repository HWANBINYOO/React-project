import { boardController, MemberController } from "../Libs/url";
import { customAxios } from "../Libs/CustomAxois";
import { toast } from "react-toastify";

export const myboardsReqeuset = async (user_id: number | string) => {
  try {
    const { data } = await customAxios.get(MemberController.myBoards(user_id));
    return { data };
  } catch (e: any) {
    const { data } = e.response;
    console.error(data.message);
    console.error("data : ", data);
  }
};

export const boards = async () => {
  try {
    const { data } = await customAxios.get(boardController.boards());
    return { data };
  } catch (e: any) {
    const { data } = e.response;
    console.error(data.message);
    console.error("data : ", data);
  }
};

export const boardImgReqeuset = async (board_id: number | string) => {
  try {
    const { data } = await customAxios.get(boardController.boardImg(board_id));
    return { data };
  } catch (e: any) {
    const { data } = e.response;
    console.error(data.message);
    console.error("data : ", data);
  }
};

export const deleteboardReqeuset = async (board_id: number | string) => {
  try {
    const { data } = await customAxios.delete(
      boardController.deleteBoard(board_id)
    );
    return { data };
  } catch (e: any) {
    const { data } = e.response;
    console.error(data.message);
    console.error("data : ", data);
  }
};
