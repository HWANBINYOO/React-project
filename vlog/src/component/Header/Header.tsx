import React from "react";
import * as S from "./Styled";

export default function Header() {
  return (
    <S.Header>
      <S.HeaderMenu style={{ fontSize: "2.5rem" }}>Home</S.HeaderMenu>
      <S.HeaderMenu style={{ fontSize: "2.5rem" }}>Profile</S.HeaderMenu>
      <S.HeaderMenu style={{ fontSize: "2.5rem" }}>Project</S.HeaderMenu>
      <S.HeaderMenu style={{ fontSize: "2.5rem" }}>Blog</S.HeaderMenu>
    </S.Header>
  );
}
