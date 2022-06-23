import { useNavigate } from "react-router-dom";
import * as S from "./Styled";
import { BlogType } from "../../types";
import { useEffect, useState } from "react";
import { customAxios } from "../../Libs/CustomAxois";
import { myProfileImgReqeuset } from "../../Api/member";
import { boardImgReqeuset } from "../../Api/board";

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
  // const [userId, setuserId] = useState(user_id);

  // useEffect(() => {
  //   async function getblog2() {
  //     const { data } = await customAxios.get("user_name");
  //     setuserId(data.user_id);
  //   }
  //   getblog2();
  // }, []);

  useEffect(() => {
    async function getblog() {
      const res: any = await boardImgReqeuset(board_id);
      setBlogImg(res.data);

      const res2: any = await myProfileImgReqeuset(user_id);
      setProfileImg(res2.data);
      getblog();
    }
  }, []);

  return (
    <>
      <S.BlogItem onClick={(e: any) => navigate(`/board/${board_id}`)}>
        <S.Img src={blogImg} />
        <S.TextBox>
          <S.Title>{title}</S.Title>
          <S.desc>{content}</S.desc>
          <S.ItemBottom>
            <S.BottomLeft>
              <S.MemberImg
                onClick={(e: any) => navigate(`/profile/${user_id}`)}
              >
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
