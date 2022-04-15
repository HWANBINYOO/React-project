/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";
import { BlogType } from "../../types";
import Footer from "../Footer/Footer";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface BlogTypeProp {
  blogIn: BlogType;
}

const BlogIn = ({ blogIn }: BlogTypeProp) => {
  const navigate = useNavigate();
  const onBloginRemove = async (deletId: number) => {
    try {
      const { data } = await axios.post(`/blog/${deletId}`);
      console.log(data);
      alert("삭제되었습니다!");
      navigate("/blog");
      window.location.reload();
    } catch (a: any) {
      console.log(a);
    }
  };

  // const goBack = () => {
  //   history.push("/blog");
  // };

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
              onBloginRemove(blogIn.id);
            }}
            style={{ backgroundColor: "#fb7a74" }}
          >
            x
          </S.Button>
        </S.BlogButtonBox>
        <S.Title>{blogIn.title}</S.Title>
        <S.TextBox>
          <S.Img src={blogIn.BlogImg} />
          <S.desc>{blogIn.desc}</S.desc>
          <S.date>{blogIn.date}</S.date>
        </S.TextBox>
        <Footer />
      </S.BlogIn>
    </>
  );
};

export default BlogIn;
