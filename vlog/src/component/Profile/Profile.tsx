import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { customAxios } from "../../Libs/CustomAxois";
import { ProfileType } from "../../types";
import Footer from "../Footer/Footer";
import * as S from "./Styled";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, SetProfile] = useState<ProfileType>();
  // {
  //   profileimg:string;
  //   name: string;
  //   postNumber: number;
  //   email: string;
  //   blogImgs: string;
  // }
  useEffect(() => {
    async function Getprofile() {
      try {
        SetProfile(await customAxios.get("/blog/profile"));
      } catch (a: any) {
        console.log(a);
      }
    }
    Getprofile();
  }, []);
  return (
    <>
      <S.Profile>
        <S.ProfileImpormation>
          <S.ProfileImg>
            <img src={"/img/profile.png"} />
          </S.ProfileImg>
          <S.User>
            <S.EditGO>
              <S.UserName>유환빈</S.UserName>
              <S.GOEdit onClick={() => navigate("/profile/Edit")}>
                프로필 편집
              </S.GOEdit>
            </S.EditGO>
            <S.UserBlogs>게시물 2</S.UserBlogs>
            <S.UserId>dngh0825@gmail.com</S.UserId>
          </S.User>
        </S.ProfileImpormation>
        <S.Hr />
        <S.uploadBlogs>
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
        </S.uploadBlogs>
        <Footer />
      </S.Profile>
    </>
  );
};

export default Profile;
