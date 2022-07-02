import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styled";
import { customAxios } from "../../Libs/CustomAxois";
import { toast } from "react-toastify";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogAdd = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[date.getDay()];

  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const navigate = useNavigate();
  const [file, setFile] = useState(""); //파일
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64

  const onChangeTitle = (e: any) => {
    setTitle(e.currentTarget.value);
  };
  const onChangeDesc = (e: any) => {
    setDesc(e.currentTarget.value);
    console.log(desc);
  };
  const handleChangeFile = (event: any) => {
    event.preventDefault();
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setFile(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("content", desc.replace(/(?:\r\n|\r|\n)/g, "<br/>"));
    formData.append("date", `${year}-${month}-${day}`);
    if (title == "") {
      return toast.warning("제목이 비어있어요!");
    } else if (desc == "") {
      return toast.warning("내용이 비어있어요!");
    }
    if (file) {
      try {
        await customAxios.post("/board/write", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("추가됐습니다!");
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
  };

  return (
    <S.BlogAddWapper>
      <S.BlogAdd>
        <S.Box>
          <S.InputBox>
            <textarea
              name="textareaTitle"
              onChange={onChangeTitle}
              placeholder="제목을 입력해주세요"
            />
          </S.InputBox>
          <S.DescInputBox>
            <textarea
              name="textarea"
              onChange={onChangeDesc}
              placeholder="내용을 입력하세요(markdown)"
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
        <S.Button onClick={onSubmit}>올리기</S.Button>
      </S.BlogAdd>
      <S.BlogAddpreview>
        <pre>
          <ReactMarkdown remarkPlugins={[remarkGfm]} children={desc} />
        </pre>
      </S.BlogAddpreview>
    </S.BlogAddWapper>
  );
};

export default BlogAdd;
