/* eslint-disable jsx-a11y/alt-text */
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

  const [title, setTitle] = useState<string>();
  const [desc, setDesc] = useState<string>();

  const onSubmit = () => {
    axios
      .post(
        "/blog",
        {
          BlogImg: "",
          date: `${year}년 ${month}월 ${day}일`,
          // title: ;
          // desc: string;
          // id: string;
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(({ data }) => {
        if (data.msg === "성공하였습니다") console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <S.BlogAdd>
        <S.Box>
          <S.InputBox>
            <S.Input
              style={{ fontSize: "3rem" }}
              type="text"
              placeholder="제목을 입력해주세요"
            />
          </S.InputBox>
          <S.DescInputBox>
            <textarea placeholder="내용을 입력하세요"></textarea>
            {/* <S.Input
              style={{ fontSize: "2rem" }}
              type="text"
              placeholder="내용을 입력해주세요"
            /> */}
          </S.DescInputBox>
        </S.Box>

        <S.Today>{`${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`}</S.Today>
        <S.Button onSubmit={onSubmit}>올리기</S.Button>
        {/* <Footer /> */}
      </S.BlogAdd>
    </>
  );
};

export default BlogAdd;
