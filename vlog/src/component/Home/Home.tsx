import React from "react";
import * as S from "./Styled";

export default function Home() {
  return (
    <S.Home>
      <S.HelloPickture />
      <S.Intrudece>
        <p>소개글</p>
        <S.InputBox />
      </S.Intrudece>
      <S.Intrudece>
        <p>기능,Stack</p>
        <S.InputBox />
      </S.Intrudece>
    </S.Home>
  );
}
