/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";
import AboutImg from "../../Assets/About.webp";
import pianoImg from "../../Assets/piano.jpg";
import songImg from "../../Assets/song.png";
import goodImg from "../../Assets/2977.jpg";
import carImg from "../../Assets/car.webp";
import sesiImg from "../../Assets/11.jpg";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
      <S.About>
        <S.Img style={{ width: "40%" }} src={AboutImg} />
        <S.Intrudece>
          <p>유환빈</p>
          안녕하세요
          <br />
          지금 Ts 공부하고 있어요
          <br />
          react 값넘기는거랑 Ts 타입주는거 연습하기 위해서 만들어봤어요
          <br />
          자격증은 컴활2급있고 산업기사 딸려고요
        </S.Intrudece>
        <S.AboutContents>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={goodImg} />
            <S.decs>
              <p>제가 제일 좋아하는 과일</p>
              <p>귤</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={sesiImg} />
            <S.decs>
              <p>제가 좋아하는 음식</p>
              <p>연어초밥</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={songImg} />
            <S.decs>
              <p>음악감상이 취미</p>
              <p>팝송</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={pianoImg} />
            <S.decs>
              <p>치아노치기가 취미</p>
              <p>클래식</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={carImg} />
            <S.decs>
              <p>이건 그림이 멋져서.</p>
            </S.decs>
          </S.AboutContent>
        </S.AboutContents>
        <Footer />
      </S.About>
    </>
  );
}
