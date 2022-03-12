import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./DcalendarS";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Dcalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <S.Dcalendar>
        <Calendar onChange={onChange} value={value} />
        <Link to="/main" className="text-link">
          오늘 일기 쓰기
        </Link>
      </S.Dcalendar>
    </>
  );
};

export default Dcalendar;
