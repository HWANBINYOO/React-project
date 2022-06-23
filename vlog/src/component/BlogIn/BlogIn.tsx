import * as S from "./Styled";
import { BlogType } from "../../types";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { customAxios } from "../../Libs/CustomAxois";
interface BlogTypeProp {
  blogIn: BlogType;
}

const BlogIn = ({ blogIn }: BlogTypeProp) => {
  const navigate = useNavigate();
  const [Blogrl, setBlogurl] = useState();
  const [DelectDisplay, setDelectDisplay] = useState(false);
  const [boardId, setboardId] = useState(blogIn.board_id);
  const [userId, setUserId] = useState(blogIn.user_id);
  const [profileImg, setProfileImg] = useState<string>();

  useEffect(() => {
    async function GetBlogImg() {
      try {
        const respone = await customAxios.get(
          `/board_image/${blogIn.board_id}`
        );
        const respone3 = await customAxios.get(`/user_image/${blogIn.user_id}`);
        setProfileImg(respone3.data);

        setBlogurl(respone.data);
        const respone2 = await customAxios.get(`/user_name`);
        console.log(respone2);
        if (respone2.data.user_id === blogIn.user_id) {
          setDelectDisplay(true);
          console.log(DelectDisplay);
        } else {
          setDelectDisplay(false);
        }
      } catch (a: any) {
        console.log(a);
      }
    }
    GetBlogImg();
  }, []);

  const DelectBlog = async () => {
    try {
      const response = await customAxios.delete(`/delete/${boardId}`);
      console.log(response);
      toast.success(response.data);
      navigate(-1);
    } catch (e: any) {
      const { data } = e.response;
      console.error("data : ", data);
    }
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
            <S.ProfileImg src={"/img/profile.png"} />
          )}
          <S.ProfileName>{blogIn.user_name}</S.ProfileName>
        </S.ProfileWapper>
        <Footer />
      </S.BlogIn>
    </>
  );
};

export default BlogIn;
