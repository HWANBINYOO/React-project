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

      <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
        <S.HeaderMenu
          style={{
            backgroundColor: `${
              HeaderColor === "purple" ? "#c8abc5" : "white"
            }`,
          }}
        >
          Profile
        </S.HeaderMenu>{" "}
      </Link>

      <Link to="/project" style={{ textDecoration: "none", color: "black" }}>
        <S.HeaderMenu
          style={{
            backgroundColor: `${
              HeaderColor === "yellow" ? "#ffff9e" : "white"
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
