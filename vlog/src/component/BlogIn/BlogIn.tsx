import * as S from "./Styled";
import { BlogType } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { customAxios } from "../../Libs/CustomAxois";
import { myProfileImgReqeuset } from "../../Api/member";
import { boardImgReqeuset, deleteboardReqeuset } from "../../Api/board";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRecoilState } from "recoil";
import { boardFixidState, boardFixState } from "../../recoil/BoardFix";

interface BlogTypeProp {
  blogIn: BlogType;
}
const BlogIn = ({ blogIn }: BlogTypeProp) => {
  const [BoardEdit, setBoardEdit] = useRecoilState(boardFixState); // useState 형식
  const [boardEditN, setboardEditN] = useRecoilState(boardFixidState);
  const navigate = useNavigate();
  const [Blogrl, setBlogurl] = useState();
  const [DelectDisplay, setDelectDisplay] = useState(false);
  const [userId, setUserId] = useState(blogIn.user_id);
  const [profileImg, setProfileImg] = useState<string>();
  const [delectmodalDisplay, setDelectmodalDisplay] = useState(false);
  const [modalDisplay, setmodalDisplay] = useState(false);
  useEffect(() => {
    async function GetBlogImg() {
      const res: any = await boardImgReqeuset(blogIn.board_id);
      console.log(res.data);
      setBlogurl(res.data);
      const res2: any = await myProfileImgReqeuset(blogIn.user_id);

      setProfileImg(res2.data);
      const respone2 = await customAxios.get(`/user_name`);
      if (respone2.data.user_id === blogIn.user_id) {
        setDelectDisplay(true);
      } else {
        setDelectDisplay(false);
      }
    }
    GetBlogImg();
  }, []);

  const goBoardEdit = () => {
    setBoardEdit(true);
    setboardEditN(blogIn.board_id);
    navigate("/boardadd");
  };

  const DelectBlog = async () => {
    deleteboardReqeuset(blogIn.board_id);
    setTimeout(() => {
      navigate(-1);
    }, 1500);
  };

  return (
    <>
      <S.BlogIn>
        {/* {delectmodalDisplay ? (
          <S.Modal>
            <S.ModalContainal>
              <button
                style={{ backgroundColor: "#aeddff", fontSize: "2rem" }}
                onClick={() => setDelectmodalDisplay(false)}
              >
                취소하기
              </button>
              <button
                style={{ backgroundColor: " rgb(255, 157, 149)" }}
                onClick={DelectBlog}
              >
                삭제하기
              </button>
            </S.ModalContainal>
          </S.Modal>
        ) : null} */}

        {modalDisplay ? (
          <S.Modal>
            <S.ModalContainal>
              <button
                style={{ backgroundColor: "#aeddff", fontSize: "2rem" }}
                onClick={() => setmodalDisplay(false)}
              >
                취소하기
              </button>
              <button
                style={{ backgroundColor: "#c3dcba" }}
                onClick={() => navigate("/boardadd")}
              >
                추가하기
              </button>
              <button
                style={{ backgroundColor: "#ffaa66" }}
                onClick={goBoardEdit}
              >
                수정하기
              </button>
              <button
                style={{ backgroundColor: " rgb(255, 157, 149)" }}
                onClick={DelectBlog}
              >
                삭제하기
              </button>
            </S.ModalContainal>
          </S.Modal>
        ) : null}

        <S.BlogButtonBox>
          {/* <S.Button
            onClick={() => setmodalDisplay(true)}
            style={{
              backgroundColor: " #3f3b3b",
              display: DelectDisplay ? "block" : "none",
              fontSize: "2rem",
              color: "#ffffff",
            }}
          >
            ...
          </S.Button> */}

          {/* <Link
            to="/boardadd"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <S.Button
              style={{ backgroundColor: "#aeddff", fontSize: "1.4rem" }}
            >
              추가
            </S.Button>
          </Link>

          <S.Button
            onClick={() => setDelectmodalDisplay(true)}
            style={{
              backgroundColor: " rgb(255, 157, 149)",
              display: DelectDisplay ? "block" : "none",
              fontSize: "1.4rem",
            }}
          >
            삭제
          </S.Button>
          <S.Button
            onClick={goBoardEdit}
            style={{
              backgroundColor: "#ffaa66",
              display: DelectDisplay ? "block" : "none",
              fontSize: "1.4rem",
            }}
          >
            수정
          </S.Button> */}
        </S.BlogButtonBox>
        <S.Title>{blogIn.title}</S.Title>
        <S.NameDate>
          <S.Name>
            {blogIn.user_name} · {blogIn.date}
          </S.Name>
          <S.H1 onClick={() => setmodalDisplay(true)}>...</S.H1>
        </S.NameDate>
        <S.TextBox>
          <S.Img src={Blogrl} />
          <S.desc>
            <pre>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                children={blogIn.content}
              />
            </pre>
          </S.desc>
        </S.TextBox>
        <S.ProfileWapper onClick={(e: any) => navigate(`/profile/${userId}`)}>
          {profileImg ? (
            <S.ProfileImg src={profileImg} />
          ) : (
            <S.ProfileImg
              src={
                "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/profile.png"
              }
            />
          )}
          <S.ProfileName>{blogIn.user_name}</S.ProfileName>
        </S.ProfileWapper>
      </S.BlogIn>
    </>
  );
};

export default BlogIn;
