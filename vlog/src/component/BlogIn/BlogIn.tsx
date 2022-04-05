/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";
import { BlogType } from "../../types";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import manImg from "../../Assets/dhd.webp";
import goodImg from "../../Assets/2977.jpg";

interface BlogTypeProp {
  blogIn: BlogType;
}

const BlogIn = ({ blogIn }: BlogTypeProp) => {
  return (
    <>
      <S.BlogIn>
        <S.Img src={"../../Assets/2977.jpg"} />
        <S.TextBox>
          <S.Title>{blogIn.title}</S.Title>
          <S.desc>{blogIn.desc}</S.desc>
          <S.date>{blogIn.date}</S.date>
        </S.TextBox>
      </S.BlogIn>
    </>
  );
};

export default BlogIn;
