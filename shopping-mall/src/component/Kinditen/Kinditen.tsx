import { useLocation, useNavigate } from "react-router-dom";
import { KindType } from "../../types";
import * as S from "./Styled";

const Kinditem: React.FC<KindType> = ({ title, prise, imgurl }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const url = "http://10.120.74.35:8001";
  const myimgurl = url.concat(imgurl);
  console.log(imgurl);

  const onclick = (id: number) => {
    console.log(location.pathname);
    navigate(`${location.pathname}/${id}`);
  };
  return (
    <>
      <S.KinditemWapper onClick={() => onclick(1)}>
        <S.Img src={myimgurl} />
        <S.ContentBox>
          <S.Wear>Wear</S.Wear>
          <S.Decs>{title}</S.Decs>
        </S.ContentBox>
      </S.KinditemWapper>
    </>
  );
};

export default Kinditem;
