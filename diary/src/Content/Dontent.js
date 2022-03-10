import React from "react";
import * as S from "./DontentS";

const Content = () => {
  return (
    <>
      <S.Dcontent>
        <form>
          <textarea placeholder="내용을 입력해 주세요." />
          <button typeof="submit">완료</button>
        </form>
      </S.Dcontent>
    </>
  );
};

export default Content;
