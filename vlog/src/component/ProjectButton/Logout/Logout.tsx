import React from "react";
import * as S from "./Styled";
import { useNavigate } from "react-router-dom";

const TryLogout = () => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("Blog_accessToken");
    localStorage.removeItem("Blog_refreshToken");
    navigate("/");
    alert("로그아웃 되었어요");
    window.location.reload();
  };
  return onLogout;
};

const Logout = () => {
  const onLogout = TryLogout();
  return (
    <>
      <S.Logout>
        <S.LogoutButton onClick={onLogout}>Logout</S.LogoutButton>
      </S.Logout>
    </>
  );
};

export default Logout;
