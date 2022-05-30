import Kinditem from "../Kinditen/Kinditen";
import { useLocation, useNavigate } from "react-router-dom";
import { KindType } from "../../types";
import * as S from "./Styled";
import { useEffect, useState } from "react";
import { customAxios } from "../../Libs/CustomAxois";

const KindContent = () => {
  const [Kinds, setKinds] = useState<KindType>();
  const location = useLocation();
  const [open, setopen] = useState<boolean>(false);
  const [SearchBoxWidth, setSearchBoxWidth] = useState<number>(60);
  useEffect(() => {
    async function getKind() {
      try {
        setKinds(await customAxios.get(`kind/${location.pathname.substr(6)}`));
      } catch (e: any) {
        console.log(e);
      }
    }
    getKind();
  }, [location.pathname]);

  const SearchClick = () => {
    if (!open) {
      setSearchBoxWidth(400);
    } else {
      setSearchBoxWidth(60);
    }
    setTimeout(function () {
      setopen(!open);
    }, 70);
  };
  return (
    <>
      <S.KindWapper>
        <S.KindHeader>
          <S.SearchBarWapper SearchWidth={SearchBoxWidth}>
            <S.KindInput
              Inputdisplay={open}
              type="text"
              placeholder="어떤 상품을 찾으신가요?"
            />
            <S.SearBarimg onClick={SearchClick} src={"/img/searchIcon.png"} />
          </S.SearchBarWapper>
        </S.KindHeader>

        <S.KindContents>
          {/* {Kinds ? (
            Kinds.map((item, index) => {
              <Kinditem
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />;
            })
          ) : (
            <h2>loading ...</h2>
          )} */}
          <Kinditem />
        </S.KindContents>
      </S.KindWapper>
    </>
  );
};

export default KindContent;
