/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { useState } from "react";
import * as S from "./Styled";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const BlogAdd = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[date.getDay()];

  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const onChangeDesc = (e: any) => {
    console.log(e.target.value);
    setDesc(e.currentTarget.value);
  };

  const onSubmit = () => {
    axios
      .post(
        "/blog/send",
        {
          BlogImg: "",
          date: `${year}년 ${month}월 ${day}일`,
          title: title,
          desc: desc,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <>
      <S.BlogAdd>
        <S.Box>
          <S.InputBox>
            <S.Input
              value={title}
              onChange={onChangeTitle}
              style={{ fontSize: "3rem" }}
              type="text"
              placeholder="제목을 입력해주세요"
            />
          </S.InputBox>
          <S.DescInputBox>
            <textarea
              name="textarea"
              onChange={onChangeDesc}
              placeholder="내용을 입력하세요"
            />
            {/* <S.Input
              style={{ fontSize: "2rem" }}
              type="text"
              placeholder="내용을 입력해주세요"
            /> */}
          </S.DescInputBox>
        </S.Box>

        <S.Today>{`${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`}</S.Today>
        <S.Button onClick={onSubmit}>올리기</S.Button>
        {/* <Footer /> */}
      </S.BlogAdd>
    </>
  );
};

export default BlogAdd;
