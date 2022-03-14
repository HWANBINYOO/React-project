import React, { useState } from "react";
import * as S from "./DontentS";
import { Brightness1 } from "@material-ui/icons";
const Content = () => {
  const [textColor, setTextColor] = useState("grey");
  function ChangeColor(color) {
    setTextColor(color);
  }

  return (
    <>
      <S.Dcontent textColor={textColor}>
        <form>
          <textarea placeholder="내용을 입력해 주세요." />
          <div>
            <button typeof="submit">완료</button>
            <div>
              <Brightness1
                onClick={() => {
                  ChangeColor("black");
                }}
              />
              <Brightness1
                color="primary"
                onClick={() => {
                  ChangeColor("blue");
                }}
              />
              <Brightness1
                color="secondary"
                onClick={() => {
                  ChangeColor("red");
                }}
              />
            </div>
          </div>
        </form>
      </S.Dcontent>
    </>
  );
};

export default Content;
