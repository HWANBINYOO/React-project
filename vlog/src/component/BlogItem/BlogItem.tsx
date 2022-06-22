import { useNavigate } from "react-router-dom";
import * as S from "./Styled";
import { BlogType } from "../../types";
import { useEffect, useState } from "react";
import { customAxios } from "../../Libs/CustomAxois";

// const BlogItem: React.FC<BlogType> = ({ name, date, title, desc, blogId }) => {
const BlogItem: React.FC<BlogType> = ({
  user_name,
  date,
  title,
  content,
  board_id,
  user_id,
}) => {
  const navigate = useNavigate();
  const [blogImg, setBlogImg] = useState<string>();
  const [profileImg, setProfileImg] = useState<string>();
  const [userid, setuserId] = useState(user_id);

  useEffect(() => {
    async function getblog2() {
      const respone3 = await customAxios.get("user_name");
      setuserId(respone3.data.user_id);
    }
    getblog2();
  }, []);

  useEffect(() => {
    async function getblog() {
      try {
        const respone = await customAxios.get(`/board_image/${board_id}`);
        setBlogImg(respone.data);
        const respone2 = await customAxios.get(`/user_image/${userid}`);
        setProfileImg(respone2.data);
      } catch (e: any) {
        const { data } = e.response;
        console.error(data.message);
        console.error("data : ", data);
      }
    }
    getblog();
  }, []);
  return (
    <>
      <S.BlogItem onClick={(e) => navigate(`/board/${board_id}`)}>
        <S.Img src={blogImg} />
        <S.TextBox>
          <S.Title>{title}</S.Title>
          <S.desc>{content}</S.desc>
          <S.ItemBottom>
            <S.BottomLeft>
              <S.MemberImg onClick={(e) => navigate(`/profile/${user_id}`)}>
                {profileImg ? (
                  <img src={profileImg} />
                ) : (
                  <img src={"/img/profile.png"} />
                )}
              </S.MemberImg>
              <S.MemberId>{user_name}</S.MemberId>
            </S.BottomLeft>
            <S.date>{date}</S.date>
          </S.ItemBottom>
        </S.TextBox>
      </S.BlogItem>
    </>
  );
};

export default BlogItem;
