import * as S from "./Styled";
import { Link } from "react-router-dom";

export default function Header({ HeaderColor }: { HeaderColor: string }) {
  return (
    <S.Header>
      {/* <Link to="/project" style={{ textDecoration: "none", color: "black" }}>
        <S.HeaderMenu
          style={{
            backgroundColor: `${
              HeaderColor === "Orange" ? "#ffb769" : "white"
            }`,
          }}
        >
          Project
        </S.HeaderMenu>
      </Link> */}

      <Link to="/board" style={{ textDecoration: "none", color: "black" }}>
        <S.HeaderMenu
          style={{
            backgroundColor: `${HeaderColor === "red" ? "#ff9d95" : "white"}`,
          }}
        >
          Blog
        </S.HeaderMenu>
      </Link>
      <Link to="/About" style={{ textDecoration: "none", color: "black" }}>
        <S.HeaderMenu
          style={{
            backgroundColor: `${
              HeaderColor === "purple" ? "#c8abc5" : "white"
            }`,
          }}
        >
          About
        </S.HeaderMenu>
      </Link>
    </S.Header>
  );
}
