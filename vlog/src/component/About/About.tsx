import * as S from "./Styled";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
      <S.About>
        <S.Img style={{ width: "40%" }} src={"/img/About.webp"} />
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
              <p>초밥</p>
              <p>그중에서 연어초밥을가장 좋아해요</p>
              <p>가성비는 않좋아요..</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={"/img/song.png"} />
            <S.decs>
              <p>음악감상이 취미</p>
              <p>주로 팝송을 들어요</p>
              <p>근데 공부할때밖에 안들어요</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={"/img/piano.jpg"} />
            <S.decs>
              <p>치아노치기가 취미</p>
              <p>주로 클래식곡 쳐요</p>
              <p>리스트 사랑의꿈까지 칠줄알아요</p>
              <p>지금은 잘 안해요..</p>
            </S.decs>
          </S.AboutContent>
          <S.AboutContent>
            <S.Img style={{ width: "200px" }} src={"/img/car.webp"} />
            <S.decs>
              <p>이건 그림이 멋져서.ㅎ</p>
            </S.decs>
          </S.AboutContent>
        </S.AboutContents>
        <Footer />
      </S.About>
    </>
  );
}
