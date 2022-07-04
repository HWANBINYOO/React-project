import { boardController, MemberController } from "../Libs/url";
import { customAxios } from "../Libs/CustomAxois";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const myboardsReqeuset = async (user_id: number | string) => {
  try {
    const { data } = await customAxios.get(MemberController.myBoards(user_id));
    return { data };
  } catch (e: any) {
    console.error(e.message);
  }
};

export const boards = async () => {
  try {
    const { data } = await customAxios.get(boardController.boards());
    return { data };
  } catch (e: any) {
    console.error(e.message);
    if (e.message == "Request failed with status code 403") {
      alert("로그아웃 되었어요");
      localStorage.removeItem("Blog_accessToken");
      localStorage.removeItem("Blog_refreshToken");
      window.location.replace("/");
      location.reload();
    }
  }
};

export const boardImgReqeuset = async (board_id: number | string) => {
  try {
    const { data } = await customAxios.get(boardController.boardImg(board_id));
    return { data };
  } catch (e: any) {
    console.error(e.message);
  }
};

export const deleteboardReqeuset = async (board_id: number | string) => {
  try {
    await customAxios.delete(boardController.deleteBoard(board_id));
    toast.success("성공적으로 삭제되었습니다!");
  } catch (e: any) {
    console.error(e.message);
  }
};
