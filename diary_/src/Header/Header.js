import React, { useState } from "react";
import * as S from "./HeaderS";
import {
  WbSunnyOutlined,
  CloudOutlined,
  BeachAccessOutlined,
  AcUnitOutlined,
} from "@material-ui/icons";
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
  const [isActive1, setActive1] = useState(true);
  const [isActive2, setActive2] = useState(true);
  const [isActive3, setActive3] = useState(true);
  const [isActive4, setActive4] = useState(true);

  const toggleIconStyle1 = () => {
    setActive1(!isActive1);
    setActive2(true);
    setActive3(true);
    setActive4(true);
  };
  const toggleIconStyle2 = () => {
    setActive2(!isActive2);
    setActive1(true);
    setActive3(true);
    setActive4(true);
  };
  const toggleIconStyle3 = () => {
    setActive3(!isActive3);
    setActive1(true);
    setActive2(true);
    setActive4(true);
  };
  const toggleIconStyle4 = () => {
    setActive4(!isActive4);
    setActive1(true);
    setActive3(true);
    setActive3(true);
  };

  return (
    <>
      <S.Header>
        <S.Hright>
          <Today />
        </S.Hright>
        <S.Hleft>
          <WbSunnyOutlined
            className={isActive1 ? "" : "paintedSun"}
            fontSize="large"
            onClick={toggleIconStyle1}
          />
          <CloudOutlined
            fontSize="large"
            className={isActive2 ? null : "paintedCloud"}
            onClick={toggleIconStyle2}
          />
          <BeachAccessOutlined
            fontSize="large"
            className={isActive3 ? null : "paintedUm"}
            onClick={toggleIconStyle3}
          />
          <AcUnitOutlined
            fontSize="large"
            className={isActive4 ? null : "paintedSnow"}
            onClick={toggleIconStyle4}
          />
        </S.Hleft>
      </S.Header>
    </>
  );
};

export default Header;
