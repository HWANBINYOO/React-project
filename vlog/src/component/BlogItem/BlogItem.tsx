import { useNavigate } from "react-router-dom";
import * as S from "./Styled";
import { BlogType } from "../../types";
import { useEffect, useState } from "react";
import { customAxios } from "../../Libs/CustomAxois";

// const BlogItem: React.FC<BlogType> = ({ name, date, title, desc, blogId }) => {
const BlogItem: React.FC<BlogType> = ({ name, date, title, desc }) => {
  const navigate = useNavigate();
  const [blogImg, setBlogImg] = useState<string>();
  const [profileImg, setProfileImg] = useState<string>();
  const handleonClick = () => {
    navigate(`/${name}`);
  };
  useEffect(() => {
    async function getblog() {
      try {
        const { data } = await customAxios.get("/blog/item");
        // setBlogImg(`http://10.120.74.59:3000/${name}/${blogId}/blogImg`);
        // setProfileImg(`http://10.120.74.59:3000/user/${user_id}`);
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
          <S.desc>{desc}</S.desc>
          <S.ItemBottom>
            <S.BottomLeft>
              <S.MemberImg>
                <img src={profileImg} />
              </S.MemberImg>
              <S.MemberId>{name}</S.MemberId>
            </S.BottomLeft>
            <S.date>{date}</S.date>
          </S.ItemBottom>
        </S.TextBox>
      </S.BlogItem>
    </>
  );
};

export default BlogItem;
