import { Link } from "react-router-dom";
import * as S from "./Styled";

export default function Title() {
  return (
    <S.Title>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <S.TitleP>DevLog </S.TitleP>
      </Link>
    </S.Title>
  );
}
