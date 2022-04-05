/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from "react-router-dom";
import * as S from "./Styled";

interface BlogType {
  BlogImg: string;
  date: string;
  title: string;
  desc: string;
  id: string;
}

const BlogItem: React.FC<BlogType> = ({ BlogImg, date, title, desc, id }) => {
  const navigate = useNavigate();
  const handleonClick = () => {
    navigate(`/${id}`);
  };
  return (
    <>
      <S.BlogItem onClick={handleonClick}>
        <S.Img src={BlogImg} />
        <S.TextBox>
          <S.Title>{title}</S.Title>
          <S.desc>{desc}</S.desc>
          <S.date>{date}</S.date>
        </S.TextBox>
      </S.BlogItem>
    </>
  );
};

export default BlogItem;
