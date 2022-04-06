/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";
import { BlogType } from "../../types";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface BlogTypeProp {
  blogIn: BlogType;
}

const BlogIn = ({ blogIn }: BlogTypeProp) => {
  const onBloginRemove = (n: number) => {
    axios
      .delete("/blog")
      .then((res) => {
        console.log(res);
      })
      .catch((error: any) => {
        console.log(error);
      });
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
