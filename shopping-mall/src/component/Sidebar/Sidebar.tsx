import { useEffect, useState } from "react";
import * as S from "./Styled";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [Title, setTitle] = useState("Denim");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setTitle(location.pathname.substr(6));
    console.log(location.pathname.substr(6));
  }, [location.pathname]);

  const onclick = (name: string) => {
    navigate(`/kind/${name}`);
  };

  return (
    <>
      <S.SidebarWapper url={`/img/${Title}.png`}>
        <S.White>
          <S.SmallMenu
            fontSize={Title === "Denim" ? "4rem" : "1.5rem"}
            onClick={() => onclick("Denim")}
          >
            Denim
          </S.SmallMenu>
          <S.SmallMenu
            fontSize={Title === "PantsShorts" ? "2.5rem" : "1.5rem"}
            onClick={() => onclick("PantsShorts")}
          >
            Pants Shorts
          </S.SmallMenu>
          <S.SmallMenu
            fontSize={Title === "Dresses" ? "3.5rem" : "1.55rem"}
            onClick={() => onclick("Dresses")}
          >
            Dresses
          </S.SmallMenu>
          <S.SmallMenu
            fontSize={Title === "Sweatshirts" ? "2.5rem" : "1.5rem"}
            onClick={() => onclick("Sweatshirts")}
          >
            Sweatshirts
          </S.SmallMenu>
          <S.SmallMenu
            fontSize={Title === "Shoes" ? "4rem" : "1.5rem"}
            onClick={() => onclick("Shoes")}
          >
            Shoes
          </S.SmallMenu>
          <S.SmallMenu
            fontSize={Title === "TopsShirts" ? "2.5rem" : "1.5rem"}
            onClick={() => onclick("TopsShirts")}
          >
            TopsShirts
          </S.SmallMenu>
        </S.White>
      </S.SidebarWapper>
    </>
  );
};

export default Sidebar;
