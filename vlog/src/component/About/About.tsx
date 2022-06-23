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
            <p style={{ transform: `translateX(${position}px)` }}>김성길</p>
            안녕하세요
            <br />
            성길tv에 성길이에요
            <br />
            스프링 1인자에요
            <br />
            산업기사 그냥 따죠
          </S.Intrudece>
          <S.Intrudece>
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
            <S.Img style={{ width: "200px" }} src={"/img/2977.jpg"} />
            <S.decs>
              <p>제가 제일 좋아하는 과일</p>
              <p>청포도</p>
              <p>예</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={"/img/2977.jpg"} />
            <S.decs>
              <p>제가 제일 좋아하는 과일</p>
              <p>귤</p>
              <p>겨울에 거의 매일먹어요</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={"/img/11.jpg"} />
            <S.decs>
              <p>제가 좋아하는 음식</p>
              <p>자장면</p>
              <p>정말 좋아해요</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={"/img/11.jpg"} />
            <S.decs>
              <p>제가 좋아하는 음식</p>
              <p>초밥</p>
              <p>그중에서 연어초밥을가장 좋아해요</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={"/img/song.png"} />
            <S.decs>
              <p>제가 좋아하는 취미</p>
              <p>자전거</p>
              <p>주말마다 맨날타요</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={"/img/song.png"} />
            <S.decs>
              <p>음악감상이 취미</p>
              <p>주로 팝송을 들어요</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={"/img/piano.jpg"} />
            <S.decs>
              <p>볼링치는걸 좋아해요</p>
              <p>100점은 그냥 넘기죠</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={"/img/piano.jpg"} />
            <S.decs>
              <p>치아노치기가 취미</p>
              <p>주로 클래식곡 쳐요</p>
              <p>리스트 사랑의꿈까지 칠줄알아요</p>
            </S.decs>
          </S.AboutContent>
        </S.AboutContents>
        <Footer />
      </S.About>
    </>
  );
}
