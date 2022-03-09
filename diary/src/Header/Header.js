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
  const [isActive, setActive] = useState("false");

  const toggleIconStyle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <S.Header>
        <S.Hright>
          <Today />
        </S.Hright>
        <S.Hleft>
          <WbSunnyOutlined
            className={isActive ? "paintedSun" : null}
            fontSize="large"
            onClick={toggleIconStyle}
          />
          <CloudOutlined
            fontSize="large"
            className={isActive ? "paintedCloud" : null}
            onClick={toggleIconStyle}
          />
          <BeachAccessOutlined
            fontSize="large"
            className={isActive ? "paintedUm" : null}
            onClick={toggleIconStyle}
          />
          <AcUnitOutlined
            fontSize="large"
            className={isActive ? "paintedSnow" : null}
            onClick={toggleIconStyle}
          />
        </S.Hleft>
      </S.Header>
    </>
  );
};

export default Header;
