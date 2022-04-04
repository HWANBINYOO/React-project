/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";

interface BlogType {
  BlogImg: string;
  date: string;
  title: string;
  desc: string;
  id: number;
}

const BlogIn: React.FC<BlogType> = ({ BlogImg, date, title, desc, id }) => {
  return (
    <>
      <S.BlogIn>
        <S.Img src={BlogImg} />
        <S.TextBox>
          <S.Title>{title}</S.Title>
          <S.desc>{desc}</S.desc>
          <S.date>{date}</S.date>
        </S.TextBox>
      </S.BlogIn>
    </>
  );
};

export default BlogIn;
