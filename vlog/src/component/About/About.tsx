import * as S from "./Styled";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

export default function About() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    console.log(window.scroll);
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <S.About>
        <S.IntrudeceWapper>
          <S.Intrudece>
            <img src="https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/cat.jpg" />
            <p style={{ transform: `translateX(${position}px)` }}>김성길</p>
            안녕하세요 서버 공부하는 김성길입니다
            <br />
            프레임 워크는 스프링 부트를 이용하였고
            <br />
            프로젝트 나랑 같이 할 사람 성길#0091 연락 ㄱㄱ
            <br />
            성길tv 구독 좋아요
          </S.Intrudece>
          <S.Intrudece>
            <img src="https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/%ED%8E%98%EA%B7%84.jpg" />
            <p style={{ transform: `translateX(${position}px)` }}>유환빈</p>
            안녕하세요
            <br />
            지금 Ts 공부하고 있어요
            <br />
            react 값넘기는거랑 Ts 타입주는거 연습하기 위해서 만들어봤어요
            <br />
            자격증은 컴활2급있고 산업기사 딸려고요 (3월26일)
          </S.Intrudece>
        </S.IntrudeceWapper>
        <S.AboutContents>
          <S.AboutContent>
            <S.Img
              style={{ width: "200px" }}
              src={
                "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/geern.jpg"
              }
            />
            <S.decs>
              <p>제가 제일 좋아하는 과일</p>
              <p>청포도</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img
              style={{ width: "200px" }}
              src={
                "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/2977.jpg"
              }
            />
            <S.decs>
              <p>제가 제일 좋아하는 과일</p>
              <p>귤</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img
              style={{ width: "200px" }}
              src={
                "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/kot.jpg"
              }
            />
            <S.decs>
              <p>제가 좋아하는 음식</p>
              <p>떡볶이</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img
              style={{ width: "200px" }}
              src={
                "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/11.jpg"
              }
            />
            <S.decs>
              <p>제가 좋아하는 음식</p>
              <p>연어초밥</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img
              style={{ width: "200px" }}
              src={
                "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/bikeman.jpg"
              }
            />
            <S.decs>
              <p>제가 좋아하는 취미</p>
              <p>자전거</p>
              <p>주말마다 맨날타요</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img
              style={{ width: "200px" }}
              src={
                "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/song.png"
              }
            />
            <S.decs>
              <p>음악감상이 취미</p>
              <p>주로 팝송을 들어요</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img
              style={{ width: "200px" }}
              src={
                "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/bolwing.jpg"
              }
            />
            <S.decs>
              <p>볼링치는걸 좋아해요</p>
              <p>100점은 그냥 넘기죠</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img
              style={{ width: "200px" }}
              src={
                "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/piano.jpg"
              }
            />
            <S.decs>
              <p>치아노치기가 취미</p>
              <p>주로 클래식곡 쳐요</p>
              <p>리스트 사랑의꿈까지 쳐봤어요</p>
            </S.decs>
          </S.AboutContent>
        </S.AboutContents>
        <Footer />
      </S.About>
    </>
  );
}
