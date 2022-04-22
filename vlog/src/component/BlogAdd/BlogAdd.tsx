import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styled";
import { customAxios } from "../../Libs/CustomAxois";
import { toast } from "react-toastify";

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

  const onChangeTitle = (e: any) => {
    setTitle(e.currentTarget.value);
    console.log(title);
  };
  const onChangeDesc = (e: any) => {
    console.log(e.target.value);
    setDesc(e.currentTarget.value);
  };
  const BlogaddData = [
    {
      BlogImg: "",
      date: `${year}년 ${month}월 ${day}일`,
      title: title,
      desc: desc,
    },
  ];

  const onSubmit = async () => {
    try {
      const { data } = await customAxios.post("/blog/send", BlogaddData);
      console.log(data);
      toast.success("추가됬습니다!");
      navigate("/blog");
    } catch (a: any) {
      console.log(a);
    }
  };

  return (
    <>
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
              placeholder="내용을 입력하세요"
            />
          </S.DescInputBox>
        </S.Box>

        <S.Today>{`${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`}</S.Today>
        <S.Button onClick={onSubmit}>올리기</S.Button>
      </S.BlogAdd>
    </>
  );
};

export default BlogAdd;
