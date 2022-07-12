import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styled";
import { customAxios } from "../../Libs/CustomAxois";
import { toast } from "react-toastify";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { BlogType } from "../../types";

import { useRecoilState, useResetRecoilState } from "recoil";
import { boardFixidState, boardFixState } from "../../recoil/BoardFix";
import { boards } from "../../Api/board";

const BlogAdd = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[date.getDay()];
  const [buttondisplay, setbuttondisplay] = useState(false);

  const [title, setTitle] = useState<string | undefined>("");
  const [desc, setDesc] = useState<string | undefined>("");
  const navigate = useNavigate();
  const [file, setFile] = useState<string | undefined>(""); //파일
  const [imgBase64, setImgBase64] = useState<string | undefined>(""); // 파일 base64

  const [BoardEditBoolean, setBoardEditBoolean] = useRecoilState(boardFixState); // useState 형식
  const [boardEditN, setboardEditN] = useRecoilState(boardFixidState);
  const [editboard, setEditboard] = useState<BlogType>();

  useEffect(() => {
    async function GetBlogImg() {
      if (BoardEditBoolean) {
        const { data }: any = await boards();
        const boardfilter = data?.blogs.filter(
          (item: BlogType) => item.board_id == boardEditN
        );
        setEditboard(boardfilter);
        console.log(boardfilter);
        setTitle(boardfilter[0]?.title);
        setDesc(boardfilter[0]?.content);
        setFile(boardfilter[0]?.url);
        setImgBase64(boardfilter[0]?.url);
        setbuttondisplay(true);
      }
    }
    GetBlogImg();
  }, []);

  const handleChangeFile = async (event: any) => {
    event.preventDefault();
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
        if (title && desc) {
          setbuttondisplay(true);
        }
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setFile(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    if (buttondisplay) {
      setbuttondisplay(false);
      let formData = new FormData();
      if (file && title && desc && year && month && day) {
        formData.append("file", file);
        let boardDto = {
          title: title,
          content: desc,
          date: `${year}-${month}-${day}`,
        };
        formData.append(
          "boardDto",
          new Blob([JSON.stringify(boardDto)], { type: "application/json" })
        );
      }

      if (title == "") {
        return toast.warning("제목이 비어있어요!");
      } else if (desc == "") {
        return toast.warning("내용이 비어있어요!");
      }
      if (file) {
        formData.append("file", file);
      }

      try {
        await customAxios.post("/board/write", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("이미지 변경 되었습니다!");
        navigate("/board");
      } catch (e: any) {
        console.log(e);
        if (e) {
          console.log(e.message);
        }
      }
    }
  };

  const onEdit = async (event: any) => {
    if (buttondisplay) {
      setbuttondisplay(false);
      event.preventDefault();
      let formData = new FormData();
      if (boardEditN && file && title && desc && year && month && day) {
        formData.append("file", file);
        let boardDto = {
          title: title,
          content: desc,
          board_id: boardEditN,
          date: `${year}-${month}-${day}`,
        };
        formData.append(
          "boardDto",
          new Blob([JSON.stringify(boardDto)], { type: "application/json" })
        );
      }
      if (title == "") {
        return toast.warning("제목이 비어있어요!");
      } else if (desc == "") {
        return toast.warning("내용이 비어있어요!");
      }
      if (file) {
        try {
          await customAxios.patch(`/board/update/${boardEditN}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          setBoardEditBoolean(false);
          setboardEditN("0");
          console.log(boardEditN);

          toast.success("수정됐습니다!");
          navigate("/board");
        } catch (e: any) {
          console.log(e);
          if (e.response) {
            const { data } = e.response;
            console.error("data : ", data);
            toast.warning(data.message);
          }
        }
      } else {
        toast.warning("이미지가 선택되지 않았어요!");
      }
    }
  };

  return (
    <S.BlogAddWapper>
      <S.BlogAdd>
        <S.Box>
          <S.InputBox>
            <textarea
              name="textareaTitle"
              onChange={(e: any) => setTitle(e.currentTarget.value)}
              placeholder="제목을 입력해주세요"
              value={title}
            />
          </S.InputBox>
          <S.DescInputBox>
            <textarea
              name="textarea"
              onChange={(e: any) => setDesc(e.currentTarget.value)}
              placeholder="내용을 입력하세요(markdown)"
              value={desc}
            />
          </S.DescInputBox>
        </S.Box>
        <S.BlogAddImgWapper>
          <S.BlogImg>
            {file ? (
              <img src={imgBase64} />
            ) : (
              <img
                src={
                  "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/white.png"
                }
              />
            )}
          </S.BlogImg>
          <form name="files" method="post" encType="multipart/form-data">
            <input
              id="change_img"
              type="file"
              style={{ display: "none" }}
              onChange={handleChangeFile}
            />
            <label htmlFor="change_img">변경</label>
            {/* <button type="submit">제출하기</button> */}
          </form>
        </S.BlogAddImgWapper>

        <S.Today>{`${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`}</S.Today>
        {BoardEditBoolean ? (
          <S.Button
            style={{ backgroundColor: buttondisplay ? "#ffc895 " : "#d3d3d3" }}
            onClick={onEdit}
          >
            수정하기
          </S.Button>
        ) : (
          <S.Button
            style={{ backgroundColor: buttondisplay ? "#ffc895 " : "#d3d3d3" }}
            onClick={onSubmit}
          >
            올리기
          </S.Button>
        )}
      </S.BlogAdd>
      <S.BlogAddpreview>
        <h1>{title}</h1>
        <pre>
          <ReactMarkdown remarkPlugins={[remarkGfm]} children={desc ?? ""} />
        </pre>
      </S.BlogAddpreview>
    </S.BlogAddWapper>
  );
};

export default BlogAdd;
