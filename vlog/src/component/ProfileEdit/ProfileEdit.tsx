import { useEffect, useState } from "react";
import { customAxios } from "../../Libs/CustomAxois";
import { ProfileType } from "../../types";
import Footer from "../Footer/Footer";
import * as S from "./Styled";

const ProfileEdit = () => {
  const [profile, SetProfile] = useState<ProfileType>();
  // {
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
        <S.ProfileImgEdit>
          <span>프로필이미지</span>
          <S.ProfileImg>
            <img src={"/img/profile.png"} />
          </S.ProfileImg>
          <button>수정</button>
        </S.ProfileImgEdit>
        <S.UserName>유환빈</S.UserName>
        <S.UserBlogs>게시물 2</S.UserBlogs>
        <S.UserId>hwanbin_0825</S.UserId>
        <Footer />
      </S.Profile>
    </>
  );
};

export default ProfileEdit;
