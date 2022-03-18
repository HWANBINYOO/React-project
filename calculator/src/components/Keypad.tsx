import React from "react";
import * as S from "./KeypadSt";

const Keypad = (props: any) => {
  return (
    <>
      <S.Keypad>
        {props.children}
        {/* We are using composition instead of inheritance.
                    read more: https://reactjs.org/docs/composition-vs-inheritance.html */}
      </S.Keypad>
    </>
  );
};

export default Keypad;
