import * as S from "./Style";
import React, { useState } from "react";
import SelectN from "../SelectN/SelectN";

const inputNumbers = () => {
  const [firstNumver, setFirstNumber] = useState<number>();
  const [secondNumver, setSecondNumver] = useState<number>();
  const [mathSign, setMathSign] = useState<string>("");
  const changeNumber1 = (e: any) => {
    setFirstNumber(e.target.number);
  };
  const changeNumber2 = (e: any) => {
    setSecondNumver(e.target.number);
  };

  return (
    <>
      <S.inputNumbers>
        <input placeholder="firstNumber" onChange={changeNumber1} />
        <SelectN />
        <input placeholder="secondNumber" onChange={changeNumber2} />
      </S.inputNumbers>
    </>
  );
};

export default inputNumbers;
