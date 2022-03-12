import React from "react";
import * as S from "./PicktureS";

const Pickture = () => {
  return (
    <>
      <S.DiaryBox>
        <label className="input-file-button" for="input-file">
          사진업로드
        </label>
        <input type="file" id="input-file" style={{ display: "none" }} />
      </S.DiaryBox>
    </>
  );
};

export default Pickture;
