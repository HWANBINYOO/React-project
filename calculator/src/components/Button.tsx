import React from "react";
import * as S from "./ButtonSt";

const Button = (props: any) => {
  return (
    <S.Button
      className="Button"
      onClick={props.onClick}
      data-size={props.size}
      data-value={props.value}
    >
      {props.label}
    </S.Button>
  );
};

export default Button;
