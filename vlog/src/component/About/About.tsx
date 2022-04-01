/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";

export default function About() {
  return (
    <S.About>
      <S.Intrudece>
        <p>소개글</p>
        {/* <br /> */}
        안녕하세요
      </S.Intrudece>
      <S.Intrudece>
        <p>기능,Stack</p>
        <br />
        지금 ts 공부하고있어요
      </S.Intrudece>
    </S.About>
  );
}
