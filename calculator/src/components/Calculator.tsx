/* eslint-disable no-eval */
import React, { useState } from "react";
import * as S from "./CalculatorSt";
import Button from "./Button";
import Display from "./Display";
import Keypad from "./Keypad";

const Calculator = () => {
  const [state, setState] = useState({ data: "" });

  const calculate = () => {
    const result = eval(state.data);
    setState({ data: result });
  };

  const handleClick = (e: any) => {
    const value = e.target.getAttribute("data-value");
    switch (value) {
      case "clear":
        setState({ data: "" });
        break;
      case "equal":
        calculate();
        break;
      default:
        setState({ data: state.data + value });
    }
  };
  return (
    <>
      <S.Calculator>
        <Display data={state.data} />
        <Keypad>
          <Button onClick={handleClick} label="C" value="clear" />
          <Button onClick={handleClick} label="7" value="7" />
          <Button onClick={handleClick} label="4" value="4" />
          <Button onClick={handleClick} label="1" value="1" />
          <Button onClick={handleClick} label="0" value="0" />

          <Button onClick={handleClick} label="/" value="/" />
          <Button onClick={handleClick} label="8" value="8" />
          <Button onClick={handleClick} label="5" value="5" />
          <Button onClick={handleClick} label="2" value="2" />
          <Button onClick={handleClick} label="." value="." />

          <Button onClick={handleClick} label="x" value="*" />
          <Button onClick={handleClick} label="9" value="9" />
          <Button onClick={handleClick} label="6" value="6" />
          <Button onClick={handleClick} label="3" value="3" />
          <Button onClick={handleClick} label="" value="null" />

          <Button onClick={handleClick} label="-" value="-" />
          <Button onClick={handleClick} label="+" size="2" value="+" />
          <Button onClick={handleClick} label="=" size="2" value="equal" />
        </Keypad>
      </S.Calculator>
    </>
  );
};

export default Calculator;
