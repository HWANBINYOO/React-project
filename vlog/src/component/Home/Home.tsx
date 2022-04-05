/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";
// import sesiImg from "/img/11.jpg";
// import pianoImg from "/img/piano.jpg";
// import manImg from "/img/dhd.webp";
// import songImg from "/img/song.png";
// import goodImg from "/img/2977.jpg";
// import carImg from "/img/car.webp";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
      <S.Home>
        <S.HelloPickture>
          <S.Img src={"/img/dhd.webp"} />
          <S.Img src={"/img/2977.jpg"} />
          <S.Img src={"/img/11.jpg"} />
          <S.Img src={"/img/piano.jpg"} />
          <S.Img src={"/img/song.png"} />
          <S.Img src={"/img/car.webp"} />
        </S.HelloPickture>
        <Footer />
      </S.Home>
    </>
  );
}
