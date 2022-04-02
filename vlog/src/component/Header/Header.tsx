import * as S from "./Styled";
import { Link } from "react-router-dom";
interface Homes {
  HeaderColor: string;
}

export default function Header({ HeaderColor }: Homes) {
  return (
    <S.Header>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <S.HeaderMenu
          style={{
            backgroundColor: `${HeaderColor === "blue" ? "#a3d1f5" : "white"}`,
          }}
        >
          Home
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
        </S.HeaderMenu>{" "}
      </Link>

      <Link to="/project" style={{ textDecoration: "none", color: "black" }}>
        <S.HeaderMenu
          style={{
            backgroundColor: `${
              HeaderColor === "Orange" ? "#ffb769" : "white"
            }`,
          }}
        >
          Project
        </S.HeaderMenu>
      </Link>

      <S.HeaderMenu
        style={{
          backgroundColor: `${HeaderColor === "red" ? "red" : "white"}`,
        }}
      >
        Blog
      </S.HeaderMenu>
    </S.Header>
  );
}
