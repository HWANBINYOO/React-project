import React, { useEffect } from "react";
import * as S from "./Styled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  const navigate = useNavigate();
  const onLogout = TryLogout();
  return (
    <>
      <S.HeaderRIght>
        <S.Profile onClick={() => navigate("/profile")}>
          <img src={"/img/profile.png"} />
        </S.Profile>
        <S.LogoutButton onClick={onLogout}>Logout</S.LogoutButton>
      </S.HeaderRIght>
    </>
  );
};

export default HeaderRIght;
