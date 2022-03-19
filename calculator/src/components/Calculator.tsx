/* eslint-disable no-eval */
import React, { useState } from "react";
import * as S from "./CalculatorSt";
import Button from "./Button";
import Display from "./Display";
import Keypad from "./Keypad";

const Calculator = () => {
  const [state, setState] = useState({ data: "" });

  const calculate = () => {
    // const result = eval(state.data);
    // eslint-disable-next-line no-new-func
    const result = new Function("return " + state.data)();
    setState({ data: result });
  };

  const handleClick = (e: any) => {
    const value = e.target.getAttribute("value");
    switch (value) {
      case "c":
        setState({ data: "" });
        break;
      case "=":
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
          <Button onClick={handleClick} value="+" />
          <Button onClick={handleClick} value="-" />
          <Button onClick={handleClick} value="*" />
          <Button onClick={handleClick} value="/" />

          <Button onClick={handleClick} value="7" />
          <Button onClick={handleClick} value="8" />
          <Button onClick={handleClick} value="9" />
          <Button onClick={handleClick} value="c" />

          <Button onClick={handleClick} value="4" />
          <Button onClick={handleClick} value="5" />
          <Button onClick={handleClick} value="6" />
          <Button onClick={handleClick} value="=" />

          <Button onClick={handleClick} value="1" />
          <Button onClick={handleClick} value="2" />
          <Button onClick={handleClick} value="3" />

          <Button onClick={handleClick} value="0" />

          <Button onClick={handleClick} value="." />
        </Keypad>
      </S.Calculator>
    </>
  );
};

export default Calculator;
