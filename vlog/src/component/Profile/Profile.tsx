import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { customAxios } from "../../Libs/CustomAxois";
import { ProfileType } from "../../types";
import Footer from "../Footer/Footer";
import * as S from "./Styled";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, SetProfile] = useState<ProfileType>();
  const [profileImg, setProfileImg] = useState<string>();
  const [Imgurl, setImgurl] = useState<string[]>();
  const [UserName, setUserName] = useState<string>();
  const [UserEmail, setUserEmail] = useState<string>();
  const [UserBoardNumber, setUserBoardNumber] = useState<string>();
  // {
  //   "user_id": number,
  //   "user_name": string,
  //   "user_email": string,
  //   “board_number” : number,
  //   “board_img” : string
  //   }
  useEffect(() => {
    async function Getprofile() {
      try {
        const { data } = await customAxios.get("/blog/profile");
        setProfileImg(data.user.profileImg);
        setUserName(data.user_name);
        setUserEmail(data.user_email);
        setUserBoardNumber(data.board_number);
        setImgurl(data.board_img);
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
            {profileImg ? (
              <img src={profileImg} />
            ) : (
              <img src={"/img/profile.png"} />
            )}
          </S.ProfileImg>
          <S.User>
            <S.EditGO>
              <S.UserName>유환빈</S.UserName>
              {/* <S.UserName>{UserName}</S.UserName> */}
              <S.UserName></S.UserName>
              <S.GOEdit onClick={() => navigate("/profile/Edit")}>
                프로필 편집
              </S.GOEdit>
            </S.EditGO>
            <S.UserBlogs>게시물 2</S.UserBlogs>
            {/* <S.UserBlogs>{UserBoardNumber}</S.UserBlogs> */}
            <S.UserEmail>dngh0825@gmail.com</S.UserEmail>
            {/* <S.UserId>{UserBoardNumber}</S.UserId> */}
          </S.User>
        </S.ProfileImpormation>
        <S.Hr />
        <S.uploadBlogs>
          {/* {Imgurl ? (
            Imgurl.map((item) => <img src={item} />)
          ) : (
            <img src={"/img/loading.gif"} />
          )} */}
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
