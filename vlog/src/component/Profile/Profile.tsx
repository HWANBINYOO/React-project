import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { customAxios } from "../../Libs/CustomAxois";
import { BlogType, ProfileType } from "../../types";
import BlogItem from "../BlogItem/BlogItem";
import Footer from "../Footer/Footer";
import * as S from "./Styled";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, SetProfile] = useState<ProfileType>();
  const [profileImg, setProfileImg] = useState<string>();
  const [Imgurl, setImgurl] = useState();
  const [userId, setUserId] = useState();
  const [UserName, setUserName] = useState<string>();
  const [UserEmail, setUserEmail] = useState<string>();
  const [UserBoardNumber, setUserBoardNumber] = useState<number>(0);
  const param = useParams();
  const [Blogs, setBlogs] = useState<BlogType[]>();
  const [my, setmy] = useState(false);

  useEffect(() => {
    async function Getprofile() {
      try {
        console.log(param);
        const { data } = await customAxios.get(
          `/user_profile/${param.user_id}`
        );
        console.log(data);
        const response = await customAxios.get(`/boards/${param.user_id}`);
        const respone2 = await customAxios.get("user_name");
        console.log(respone2);

        if (respone2.data.user_id == param.user_id) {
          setmy(true);
        }
        setUserBoardNumber(data.board_number);
        setUserEmail(data.email);
        setProfileImg(data.url);
        setUserName(data.name);
        setUserId(data.user_id);
        console.log(response);

        setBlogs(response.data.blogs);
      } catch (e: any) {
        const { data } = e.response;
        console.error("data : ", data);
      }
    }
    Getprofile();
  }, []);

  function date_descending(a: any, b: any) {
    let dateA = new Date(a["date"]).getTime();
    let dateB = new Date(b["date"]).getTime();
    return dateA < dateB ? 1 : -1;
  }
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
              {my ? (
                <S.GOEdit onClick={() => navigate("/profile/Edit")}>
                  프로필 편집
                </S.GOEdit>
              ) : null}
            </S.EditGO>
            <S.UserBlogs>{`게시글 수:${UserBoardNumber}`}</S.UserBlogs>
            <S.UserEmail>{UserEmail}</S.UserEmail>
          </S.User>
        </S.ProfileImpormation>
        <S.Hr />
        <S.uploadBlogs>
          {Blogs ? (
            Blogs.sort(date_descending).map((item, index) => (
              <BlogItem
                key={index}
                board_id={item.board_id}
                user_id={item.user_id}
                user_name={item.user_name}
                title={item.title}
                content={item.content}
                date={item.date}
              />
            ))
          ) : (
            <p>loading...</p>
          )}
        </S.uploadBlogs>
        <Footer />
      </S.Profile>
    </>
  );
};

export default Profile;
