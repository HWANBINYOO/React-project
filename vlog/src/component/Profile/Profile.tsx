import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { myboardsReqeuset, profileReqeuset } from "../../Api/member";
import { customAxios } from "../../Libs/CustomAxois";
import { BlogType, ProfileType } from "../../types";
import BlogItem from "../BlogItem/BlogItem";
import Footer from "../Footer/Footer";
import * as S from "./Styled";

const Profile = () => {
  const navigate = useNavigate();
  const [profile, SetProfile] = useState<ProfileType>();
  const [Blogs, setBlogs] = useState<BlogType[]>();
  const [my, setmy] = useState(false);
  const param = useParams();

  //pramsId 가 undefined 나 null 일때 예외처리
  const userId = param.user_id ?? "";

  const ProfileReqeuset = async () => {
    return await profileReqeuset(userId);
  };

  const MyboardsReqeuset = async () => {
    return await myboardsReqeuset(userId);
  };

  useEffect(() => {
    async function Getprofile() {
      ProfileReqeuset().then(async (res) => {
        (await res?.data) && SetProfile(res?.data);
      });
      MyboardsReqeuset().then(async (res) => {
        (await res?.data) && setBlogs(res?.data.blogs);
      });
      const { data } = await customAxios.get("user_name");
      if (data.user_id == param.user_id) setmy(true);
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
            {profile?.url ? (
              <img src={profile?.url} />
            ) : (
              <img src={"/img/profile.png"} />
            )}
          </S.ProfileImg>
          <S.User>
            <S.EditGO>
              <S.UserName>{profile?.name}</S.UserName>
              <S.UserName></S.UserName>
              {my ? (
                <S.GOEdit onClick={() => navigate("/profile/Edit")}>
                  프로필 편집
                </S.GOEdit>
              ) : null}
            </S.EditGO>
            <S.UserBlogs>{`게시글 수:${profile?.board_number}`}</S.UserBlogs>
            <S.UserEmail>{profile?.email}</S.UserEmail>
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
