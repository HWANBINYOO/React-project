import { Link } from "react-router-dom";
import * as S from "./Styled";

export default function Title() {
  return (
    <S.Title>
      <Link to="/About" style={{ textDecoration: "none", color: "black" }}>
        <S.TitleP>DevLog </S.TitleP>
      </Link>
    </S.Title>
  );
}
