import * as S from "./Styled";
import { Link } from "react-router-dom";
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
        <S.GoLogin>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <h2>Login</h2>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
            <h2>Signup</h2>
          </Link>
        </S.GoLogin>
        {/* <Footer /> */}
      </S.Home>
    </>
  );
}
