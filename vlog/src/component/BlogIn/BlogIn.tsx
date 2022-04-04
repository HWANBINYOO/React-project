/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";

interface BlogType {
  blogIn: any;
}

const BlogIn: React.FC<BlogType> = ({ blogIn }) => {
  return (
    <>
      <S.BlogIn>
        <S.Img src={blogIn.BlogImg} />
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
