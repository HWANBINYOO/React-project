/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";
import { BlogType } from "../../types";
import Footer from "../Footer/Footer";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface BlogTypeProp {
  blogIn: BlogType;
}

const BlogIn = ({ blogIn }: BlogTypeProp) => {
  return (
    <>
      <S.BlogIn>
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
