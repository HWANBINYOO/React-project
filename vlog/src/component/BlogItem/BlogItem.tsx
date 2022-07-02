import { useNavigate } from "react-router-dom";
import * as S from "./Styled";
import { BlogType } from "../../types";
import { useEffect, useRef, useState } from "react";
import { boardImgReqeuset } from "../../Api/board";
import { myProfileImgReqeuset } from "../../Api/member";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogItem: React.FC<BlogType> = ({
  user_name,
  date,
  title,
  content,
  board_id,
  user_id,
}) => {
  const navigate = useNavigate();
  const [blogImg, setBlogImg] = useState<string>();
  const [profileImg, setProfileImg] = useState<string>();
  const BlogItemRef = useRef<any>();

  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [Width, setWidth] = useState(0);
  const [Height, setHeight] = useState(0);

  const [centerX, setCenterX] = useState(0);
  const [centerY, setCenterY] = useState(0);
  const [D, setD] = useState(0);
  useEffect(() => {
    async function getblog() {
      setX(BlogItemRef.current.getBoundingClientRect().x);
      setY(BlogItemRef.current.getBoundingClientRect().y);
      setWidth(BlogItemRef.current.getBoundingClientRect().width);
      setHeight(BlogItemRef.current.getBoundingClientRect().height);
      try {
        const respone: any = await boardImgReqeuset(board_id);
        setBlogImg(respone.data);
        const respone2: any = await myProfileImgReqeuset(user_id);
        setProfileImg(respone2.data);
      } catch (e: any) {
        const { data } = e.response;
        console.error(data.message);
        console.error("data : ", data);
      }
    }
    getblog();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleResize = () => {
    setX(BlogItemRef.current.getBoundingClientRect().x);
    setY(BlogItemRef.current.getBoundingClientRect().y);
    setWidth(BlogItemRef.current.getBoundingClientRect().width);
    setHeight(BlogItemRef.current.getBoundingClientRect().height);
  };
  const MouseIn = () => {
    BlogItemRef.current.addEventListener("mousemove", mouseMove);
  };
  const mouseLeave = () => {
    BlogItemRef.current.removeEventListener("mousemove", mouseMove);
    BlogItemRef.current.style.transform = "";
    BlogItemRef.current.style.boxShadow = "";
  };
  const mouseMove = (e: any) => {
    // Left = e.clientX - X , Top = e.clientY - Y
    setCenterX(e.clientX - X - Width / 2);
    setCenterY(e.clientY - Height / 2);
    setD(
      Math.sqrt(
        (e.clientX - X - Width / 2) ** 2 + (e.clientY - Y - Height / 2) ** 2
      )
    );
  };

  return (
    <S.BlogItemWapper
      ref={BlogItemRef}
      onMouseEnter={MouseIn}
      onMouseLeave={mouseLeave}
      onClick={(e) => navigate(`/board/${board_id}`)}
    >
      <S.BlogItem Xcenter={centerX} Ycenter={centerY} D={D}>
        <S.Img src={blogImg} />
        <S.TextBox>
          <S.Title>{title}</S.Title>
          <S.desc>
            <ReactMarkdown remarkPlugins={[remarkGfm]} children={content} />
          </S.desc>
          <S.ItemBottom>
            <S.BottomLeft>
              <S.MemberImg onClick={(e) => navigate(`/profile/${user_id}`)}>
                {profileImg ? (
                  <img src={profileImg} />
                ) : (
                  <img
                    src={
                      "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/profile.png"
                    }
                  />
                )}
              </S.MemberImg>
              <S.MemberId>{user_name}</S.MemberId>
            </S.BottomLeft>
            <S.date>{date}</S.date>
          </S.ItemBottom>
        </S.TextBox>
      </S.BlogItem>
    </S.BlogItemWapper>
  );
};

export default BlogItem;
