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
    navigate("/");
    window.location.reload();
  };
  return onLogout;
};

const HeaderRIght = () => {
  const [userId, setUserid] = useState("");
  const [profileImg, setprofileImg] = useState("");
  useEffect(() => {
    async function Getprofile() {
      try {
        const respone = await customAxios.get("user_name");
        setUserid(respone.data.user_id);
        setprofileImg(respone.data.url);
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
          {profileImg ? (
            <img src={profileImg} />
          ) : (
            <img
              src={
                "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/profile.png"
              }
            />
          )}
        </S.Profile>
        <S.LogoutButton onClick={onLogout}>Logout</S.LogoutButton>
      </S.HeaderRIght>
    </>
  );
};

export default HeaderRIght;
