import Kinditem from "../Kinditen/Kinditen";
import { useLocation } from "react-router-dom";
import { KindType } from "../../types";
import * as S from "./Styled";
import { useEffect, useState } from "react";
import { customAxios } from "../../Libs/CustomAxois";

const a = [
  {
    img: "asdf",
    decs: "string",
    title: "string",
  },
  {
    img: "asdf",
    decs: "string",
    title: "string",
  },
];

const KindContent = () => {
  const [Kinds, setKinds] = useState<KindType[]>(a);
  const [searchTerm, setSearchTerm] = useState<string>("");

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
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
            <S.SearBarimg onClick={SearchClick} src={"/img/searchIcon.png"} />
          </S.SearchBarWapper>
        </S.KindHeader>

        <S.KindContents>
          {/* {Kinds ? ( */}
          {Kinds.map((item, index) => (
            <Kinditem
              key={index}
              title={item.title}
              decs={item.decs}
              img={item.img}
            />
          ))}

          {/* ) : (
            <h2>loading ...</h2>
          )} */}
          {/* <Kinditem /> */}
        </S.KindContents>
      </S.KindWapper>
    </>
  );
};

export default KindContent;
