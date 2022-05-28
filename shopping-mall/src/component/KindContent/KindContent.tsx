import Kinditem from "../Kinditen/Kinditen";
import { useLocation, useNavigate } from "react-router-dom";
import { KindType } from "../../types";
import * as S from "./Styled";
import { useEffect, useState } from "react";
import { customAxios } from "../../Libs/CustomAxois";

const KindContent = () => {
  const [Kinds, setKinds] = useState<KindType>();
  const location = useLocation();

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
  return (
    <>
      <S.KindWapper>
        <S.KindHeader>d</S.KindHeader>

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
