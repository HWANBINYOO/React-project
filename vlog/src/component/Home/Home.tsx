import * as S from "./Styled";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <S.Home>
        <S.HelloPickture>
          <S.Img
            src={
              "https://devlog-s3-bucket.s3.ap-northeast-2.amazonaws.com/Img/dhd.webp"
            }
          />
          <S.Img
            src={
              "https://devlog-s3-bucket.s3.ap-northeast-2.amazonaws.com/Img/2977.jpg"
            }
          />
          <S.Img
            src={
              "https://devlog-s3-bucket.s3.ap-northeast-2.amazonaws.com/Img/11.jpg"
            }
          />
          <S.Img
            src={
              "https://devlog-s3-bucket.s3.ap-northeast-2.amazonaws.com/Img/piano.jpg"
            }
          />
          <S.Img
            src={
              "https://devlog-s3-bucket.s3.ap-northeast-2.amazonaws.com/Img/song.png"
            }
          />
          <S.Img
            src={
              "https://devlog-s3-bucket.s3.ap-northeast-2.amazonaws.com/Img/car.webp"
            }
          />
        </S.HelloPickture>
        <S.GoLogin>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <h2>Login</h2>
          </Link>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2>Signup</h2>
          </Link>
        </S.GoLogin>
      </S.Home>
    </>
  );
}
