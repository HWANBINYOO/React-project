import React from "react";
import * as S from "./ButtonSt";

const Button = (props: any) => {
  return (
    <S.Button onClick={props.onClick} data-value={props.value}>
      {props.value}
    </S.Button>
  );
};

export default Button;
