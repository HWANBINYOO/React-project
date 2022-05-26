import { useState } from "react";
import * as S from "./Styled";

const Sidebar = () => {
  const [Title, setTitle] = useState("Denim");
  return (
    <>
      <S.SidebarWapper>
        <S.SmallMenu fontSize={Title === "Denim" ? "1.5rem" : "5rem"}>
          Denim
        </S.SmallMenu>
        <S.SmallMenu fontSize={Title === "Denim" ? "1.5rem" : "5rem"}>
          Raw Denim
        </S.SmallMenu>
        <S.SmallMenu fontSize={Title === "Denim" ? "1.5rem" : "5rem"}>
          Selvedge Denim
        </S.SmallMenu>
        <S.SmallMenu fontSize={Title === "Denim" ? "1.5rem" : "5rem"}>
          Washing Jean
        </S.SmallMenu>
        <S.SmallMenu fontSize={Title === "Denim" ? "1.5rem" : "5rem"}>
          Damaged Jean
        </S.SmallMenu>
      </S.SidebarWapper>
    </>
  );
};

export default Sidebar;
