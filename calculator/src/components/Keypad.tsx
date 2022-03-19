import React from "react";
import * as S from "./KeypadSt";

const Keypad = (props: any) => {
  return (
    <>
      <S.Keypad>{props.children}</S.Keypad>
    </>
  );
};

export default Keypad;
