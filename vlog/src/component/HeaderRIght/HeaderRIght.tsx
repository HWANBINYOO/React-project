import React, { useEffect, useState } from "react";
import * as S from "./Styled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { customAxios } from "../../Libs/CustomAxois";

const TryLogout = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("Blog_accessToken");
    localStorage.removeItem("Blog_refreshToken");
    toast.success("로그아웃 되었습니다!");
    navigate("/");
  };
  return onLogout;
};

const HeaderRIght = () => {
  const [userId, setUserid] = useState("");
  useEffect(() => {
    async function Getprofile() {
      try {
        const respone = await customAxios.get("user_name");
        setUserid(respone.data.user_id);
      } catch (e: any) {
        const { data } = e.response;
        console.error(data.message);
        console.error("data : ", data);
      }
    }
    Getprofile();
  }, []);

  const navigate = useNavigate();
  const onLogout = TryLogout();
  return (
    <>
      <S.HeaderRIght>
        <S.Profile onClick={() => navigate(`/profile/${userId}`)}>
          <img src={"/img/profile.png"} />
        </S.Profile>
        <S.LogoutButton onClick={onLogout}>Logout</S.LogoutButton>
      </S.HeaderRIght>
    </>
  );
};

export default HeaderRIght;
