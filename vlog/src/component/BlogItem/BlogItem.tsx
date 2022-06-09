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
  const handleonClick = () => {
    navigate(`blog/${user_id}/${board_id}`);
  };
  useEffect(() => {
    async function getblog() {
      try {
        const response = await customAxios.get(`/board_image/${board_id}`);
        setBlogImg(response.data);
        console.log(response);
        // setProfileImg(await customAxios.get(`/user_image/${user_id}`));
      } catch (a: any) {
        console.log(a);
      }
    }
    getblog();
  }, []);
  return (
    <>
      <S.BlogItem onClick={handleonClick}>
        <S.Img src={blogImg} />
        <S.TextBox>
          <S.Title>{title}</S.Title>
          <S.desc>{content}</S.desc>
          <S.ItemBottom>
            <S.BottomLeft>
              <S.MemberImg>
                <img src={profileImg} />
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
