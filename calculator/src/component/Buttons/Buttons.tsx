import * as S from "./Style";
import React, { useState } from "react";

const Buttons = () => {
  const [numbers, setNumvers] = useState<number>("");
  return (
    <>
      <Buttons>
        <button onClick={}>C</button>
        <button onClick={}>/</button>
        <button onClick={}>*</button>
        <button onClick={}>-</button>
        <button onClick={}>1</button>
        <button onClick={}>2</button>
        <button onClick={}>3</button>
        <button onClick={}>+</button>
        <button onClick={}>4</button>
        <button onClick={}>5</button>
        <button onClick={}>6</button>
        <button onClick={}>=</button>
        <button onClick={}>7</button>
        <button onClick={}>8</button>
        <button onClick={}>9</button>
      </Buttons>
    </>
  );
};

export default Buttons;
