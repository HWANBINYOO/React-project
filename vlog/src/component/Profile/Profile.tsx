import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { customAxios } from "../../Libs/CustomAxois";
import { ProfileType } from "../../types";
import Footer from "../Footer/Footer";
import * as S from "./Styled";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, SetProfile] = useState<ProfileType>();
  const [profileImg, setProfileImg] = useState<string>();
  const [Imgurl, setImgurl] = useState<string[]>();
  const [UserName, setUserName] = useState<string>("환빈");
  const [UserEmail, setUserEmail] = useState<string>("dngh0825@gmail.com");
  const [UserBoardNumber, setUserBoardNumber] = useState<number>(2);
  const param = useParams();

  // {
  //   "user_id": number,
  //   "user_name": string,
  //   "user_email": string,
  //   “board_number” : number,
  //   }

  useEffect(() => {
    async function Getprofile() {
      try {
        const { data } = await customAxios.get(`/boards/${param.id}`);
        setProfileImg(data.user.profileImg);
        setUserName(data.user_name);
        setUserEmail(data.user_email);
        setUserBoardNumber(data.board_number);
      } catch (e: any) {
        const { data } = e.response;
        console.error("data : ", data);
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
              <S.UserName>{UserName}</S.UserName>
              <S.UserName></S.UserName>
              <S.GOEdit onClick={() => navigate("/profile/Edit")}>
                프로필 편집
              </S.GOEdit>
            </S.EditGO>
            <S.UserBlogs>{`게시글 수:${UserBoardNumber}`}</S.UserBlogs>
            <S.UserEmail>{UserEmail}</S.UserEmail>
          </S.User>
        </S.ProfileImpormation>
        <S.Hr />
        <S.uploadBlogs>
          {/* {Imgurl ? (
            Imgurl.map((item) => <img src={item.url} onClick={(e) => navigate(${item.board_id}) } />)
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
