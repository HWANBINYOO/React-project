/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";
import wingImg from "../../Assets/wing.png";

export default function Home() {
  return (
    <S.Home>
      <S.HelloPickture>
        <img src={wingImg} />
      </S.HelloPickture>
      <S.Intrudece>
        <p>소개글</p>
        {/* <br /> */}
        안녕하세요
        {/* <S.InputBox /> */}
      </S.Intrudece>
      <S.Intrudece>
        <p>기능,Stack</p>
        <br />
        지금 ts 공부하고있어요
        {/* <S.InputBox /> */}
      </S.Intrudece>
    </S.Home>
  );
}
