/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import Kinditem from "../Kinditen/Kinditen";
import { useParams } from "react-router-dom";
import { KindType } from "../../types";
import * as S from "./Styled";
import { useEffect, useState } from "react";
import { baseURL } from "../../config/config";
import axios from "axios";

const KindContent = () => {
  const param = useParams();
  const [Kinds, setKinds] = useState<KindType[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setopen] = useState(false);
  const [SearchBoxWidth, setSearchBoxWidth] = useState(60);
  useEffect(() => {
    async function getKind() {
      try {
        const { data } = await axios.get(`${baseURL}/kind/${param.name}`);
        console.log(data);
        setKinds(data);
      } catch (e: any) {
        console.error(e.message);
      }
    }
    getKind();
  }, [param.name]);

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
              {...Kinds?.filter((val) => {
                if (searchTerm == "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })}
            />
            <S.SearBarimg onClick={SearchClick} src={"/img/searchIcon.png"} />
          </S.SearchBarWapper>
        </S.KindHeader>

        <S.KindContents>
          {Kinds ? (
            Kinds.map((item, index) => (
              <Kinditem
                key={index}
                id={item.id}
                title={item.title}
                prise={item.prise}
                imgurl={item.imgurl}
              />
            ))
          ) : (
            <h2>loading ...</h2>
          )}
        </S.KindContents>
      </S.KindWapper>
    </>
  );
};

export default KindContent;
