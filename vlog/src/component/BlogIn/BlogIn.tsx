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

  useEffect(() => {
    async function GetBlogImg() {
      try {
        const respone = await customAxios.get(
          `/board_image/${blogIn.board_id}`
        );
        console.log(respone);

        setBlogurl(respone.data);
      } catch (a: any) {
        console.log(a);
      }
    }
    GetBlogImg();
  }, []);

  const onBloginRemove = async (deletId: number) => {
    try {
      const { data } = await axios.post(`/board/${deletId}`);
      console.log(data);
      toast.success("삭제되었습니다!");
      useEffect(() => {
        navigate("/board");
        window.location.reload();
      }, []);
    } catch (a: any) {
      console.log(a);
    }
  };
  return (
    <>
      <S.BlogIn>
        <S.BlogButtonBox>
          <Link
            to="/blogadd"
            style={{ textDecoration: "none", color: "black" }}
          >
            <S.Button style={{ backgroundColor: "#aeddff" }}>+</S.Button>
          </Link>

          <S.Button
            onClick={() => {
              onBloginRemove(blogIn.board_id);
            }}
            style={{ backgroundColor: "#fb7a74" }}
          >
            x
          </S.Button>
        </S.BlogButtonBox>
        <S.Title>{blogIn.title}</S.Title>
        <S.NameDate>
          <S.Name>
            {blogIn.user_name} · {blogIn.date}{" "}
          </S.Name>
        </S.NameDate>
        <S.TextBox>
          <S.Img src={Blogrl} />
          <S.desc>{blogIn.content}</S.desc>
        </S.TextBox>
        <Footer />
      </S.BlogIn>
    </>
  );
};

export default BlogIn;
