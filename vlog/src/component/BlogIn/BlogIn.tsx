import * as S from "./Styled";
import { BlogType } from "../../types";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { customAxios } from "../../Libs/CustomAxois";
import { myProfileImgReqeuset } from "../../Api/member";
import { boardImgReqeuset, deleteboardReqeuset } from "../../Api/board";
interface BlogTypeProp {
  blogIn: BlogType;
}
const BlogIn = ({ blogIn }: BlogTypeProp) => {
  const navigate = useNavigate();
  const [Blogrl, setBlogurl] = useState();
  const [DelectDisplay, setDelectDisplay] = useState(false);
  const [userId, setUserId] = useState(blogIn.user_id);
  const [profileImg, setProfileImg] = useState<string>();

  useEffect(() => {
    async function GetBlogImg() {
      const res: any = await boardImgReqeuset(blogIn.board_id);
      setBlogurl(res.data);
      const res2: any = await myProfileImgReqeuset(blogIn.user_id);
      setProfileImg(res2.data);
      const respone2 = await customAxios.get(`/user_name`);

      if (respone2.data.user_id === blogIn.user_id) {
        setDelectDisplay(true);
      } else {
        setDelectDisplay(false);
      }
    }
    GetBlogImg();
  }, []);

  const DelectBlog = async () => {
    const { data }: any = await deleteboardReqeuset(blogIn.board_id);
    toast.success(data);
    navigate(-1);
  };

  return (
    <>
      <S.BlogIn>
        <S.BlogButtonBox>
          <Link
            to="/boardadd"
            style={{ textDecoration: "none", color: "black" }}
          >
            <S.Button style={{ backgroundColor: "#aeddff" }}>+</S.Button>
          </Link>

          <S.Button
            onClick={DelectBlog}
            style={{
              backgroundColor: " rgb(255, 157, 149)",
              display: DelectDisplay ? "block" : "none",
            }}
          >
            x
          </S.Button>
        </S.BlogButtonBox>
        <S.Title>{blogIn.title}</S.Title>
        <S.NameDate>
          <S.Name>
            {blogIn.user_name} · {blogIn.date}
          </S.Name>
        </S.NameDate>
        <S.TextBox>
          <S.Img src={Blogrl} />
          <S.desc>{blogIn.content}</S.desc>
        </S.TextBox>
        <S.ProfileWapper onClick={(e: any) => navigate(`/profile/${userId}`)}>
          {profileImg ? (
            <S.ProfileImg src={profileImg} />
          ) : (
            <S.ProfileImg
              src={
                "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/profile.png"
              }
            />
          )}
          <S.ProfileName>{blogIn.user_name}</S.ProfileName>
        </S.ProfileWapper>
        <Footer />
      </S.BlogIn>
    </>
  );
};

export default BlogIn;
