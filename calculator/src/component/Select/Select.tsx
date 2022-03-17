import React from "react";
import * as S from "./Style";

const Select = () => {
  const handleChangeSelect = (e: any) => {
    switch (e.target.value) {
      case "1":
        return "+";
      case "2":
        return "-";
      case "3":
        return "*";
      case "4":
        return "/";
      case "5":
        return "%";
    }
  };
  return (
    <>
      <S.Select>
        <select className="w150" onChange={handleChangeSelect} value={"4"}>
          <option value="1">+</option>
          <option value="2">-</option>
          <option value="3">*</option>
          <option value="4">/</option>
          <option value="5">%</option>
        </select>
      </S.Select>
    </>
  );
};

export default Select;
