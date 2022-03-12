import React, { useState } from "react";
import * as S from "./HeaderS";
// import {
//   WbSunnyOutlinedIcon,
//   CloudOutlinedIcon,
//   BeachAccessOutlinedIcon,
//   AcUnitOutlinedIcon,
// } from "@material-ui/icons";
const Today = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getDate();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[date.getDay()];
  return `${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`;
};

const Header = () => {
  // const [isActive1, setActive1] = useState("false");
  // const [isActive2, setActive2] = useState("false");
  // const [isActive3, setActive3] = useState("false");
  // const [isActive4, setActive4] = useState("false");

  // const toggleIconStyle1 = () => {
  //   setActive1(!isActive1);
  // };
  // const toggleIconStyle2 = () => {
  //   setActive2(!isActive2);
  // };
  // const toggleIconStyle3 = () => {
  //   setActive3(!isActive3);
  // };
  // const toggleIconStyle4 = () => {
  //   setActive4(!isActive4);
  // };

  return (
    <>
      <S.Header>
        <S.Hright>
          <Today />
        </S.Hright>
        {/* <S.Hleft>
          <WbSunnyOutlinedIcon
            className={isActive1 ? null : "paintedSun"}
            fontSize="large"
            onClick={toggleIconStyle1}
          />
          <CloudOutlinedIcon
            fontSize="large"
            className={isActive2 ? null : "paintedCloud"}
            onClick={toggleIconStyle2}
          />
          <BeachAccessOutlinedIcon
            fontSize="large"
            className={isActive3 ? null : "paintedUm"}
            onClick={toggleIconStyle3}
          />
          <AcUnitOutlinedIcon
            fontSize="large"
            className={isActive4 ? null : "paintedSnow"}
            onClick={toggleIconStyle4}
          />
        </S.Hleft> */}
      </S.Header>
    </>
  );
};

export default Header;
