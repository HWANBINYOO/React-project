/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";
import sesiImg from "../../Assets/11.jpg";
import pianoImg from "../../Assets/piano.jpg";
import manImg from "../../Assets/dhd.webp";
import songImg from "../../Assets/song.png";
import goodImg from "../../Assets/2977.jpg";
import carImg from "../../Assets/car.webp";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <S.Home>
      <S.HelloPickture>
        <S.Img src={manImg} />
        <S.Img src={goodImg} />
        <S.Img src={sesiImg} />
        <S.Img src={pianoImg} />
        <S.Img src={songImg} />
        <S.Img src={carImg} />
      </S.HelloPickture>
      <Footer />
    </S.Home>
  );
}
