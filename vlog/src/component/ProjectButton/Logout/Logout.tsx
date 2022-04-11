import React from "react";
import * as S from "./Styled";
import { useNavigate } from "react-router-dom";

const TryLogout = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    try {
      localStorage.removeItem("Blog_accessToken");
      localStorage.removeItem("Blog_refreshToken");
      // localStorage.removeItem("role");

      navigate("/");
      alert("로그아웃 되었어요");
      window.location.reload();
    } catch (e: any) {
      if (e.message === "Request failed with status code 401") {
        alert("로그아웃 되었어요. 다시 로그인 해주세요");

        localStorage.removeItem("Blog_accessToken");
        localStorage.removeItem("Blog_refreshToken");
        // localStorage.removeItem("role");

        window.location.reload();
      }
    }
  };
  return onLogout;
};

const Logout = () => {
  const onLogout = TryLogout();

  return (
    <>
      <S.Logout>
        <S.LogoutButton onClick={onLogout}>로그아웃</S.LogoutButton>
      </S.Logout>
    </>
  );
};

export default Logout;
