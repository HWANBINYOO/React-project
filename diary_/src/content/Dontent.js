import React from "react";
import * as S from "./DontentS";
import { Brightness1 } from "@material-ui/icons";
const Content = () => {
  return (
    <>
      <S.Dcontent>
        <form>
          <textarea placeholder="내용을 입력해 주세요." />
          <div>
            <button typeof="submit">완료</button>
            <div>
              <Brightness1 className={"redCircle"} />
              <Brightness1 color="primary" className={"blackCircle"} />
              <Brightness1 color="secondary" className={"yellowCircle"} />
            </div>
          </div>
        </form>
      </S.Dcontent>
    </>
  );
};

export default Content;
