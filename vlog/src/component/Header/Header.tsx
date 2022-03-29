import * as S from "./Styled";

interface Homes {
  HeaderColor: string;
}

export default function Header({ HeaderColor }: Homes) {
  return (
    <S.Header>
      <S.HeaderMenu
        style={{ fontSize: "2.5rem", backgroundColor: `${HeaderColor}` }}
      >
        Home
      </S.HeaderMenu>

      <S.HeaderMenu style={{ fontSize: "2.5rem" }}>Profile</S.HeaderMenu>
      <S.HeaderMenu style={{ fontSize: "2.5rem" }}>Project</S.HeaderMenu>
      <S.HeaderMenu style={{ fontSize: "2.5rem" }}>Blog</S.HeaderMenu>
    </S.Header>
  );
}
