import { useNavigate } from "react-router-dom";
import * as S from "./Styled";
import { BlogType } from "../../types";

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
          <S.ItemBottom>
            <S.BottomLeft>
              {/* <S.MemberImg>{img}</S.MemberImg>
            <S.MemberId>{name}</S.MemberId> */}
            </S.BottomLeft>
            <S.date>{date}</S.date>
          </S.ItemBottom>
        </S.TextBox>
      </S.BlogItem>
    </>
  );
};

export default BlogItem;
