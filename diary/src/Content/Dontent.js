import React from "react";
import * as S from "./DontentS";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
const Content = () => {
  return (
    <>
      <S.Dcontent>
        <form>
          <textarea placeholder="내용을 입력해 주세요." />
          <div>
            <AccessAlarmIcon />
            <button typeof="submit">완료</button>
          </div>
        </form>
      </S.Dcontent>
    </>
  );
};

export default Content;
