import React from "react";
import * as S from "./DisplaySt";

const Display = (props: any) => {
  return (
    <>
      <S.Display>{props.data}</S.Display>
    </>
  );
};

export default Display;
