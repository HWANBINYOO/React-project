import { useLocation, useNavigate } from "react-router-dom";
import { KindType } from "../../types";
import * as S from "./Styled";

const Kinditem: React.FC<KindType> = ({ title, imgurl, id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(imgurl);

  const onclick = (id: number) => {
    console.log(location.pathname);
    navigate(`${location.pathname}/${id}`);
  };
  return (
    <>
      <S.KinditemWapper onClick={() => onclick(id)}>
        <S.Img src={imgurl} />
        <S.ContentBox>
          <S.Wear>Wear</S.Wear>
          <S.Decs>{title}</S.Decs>
        </S.ContentBox>
      </S.KinditemWapper>
    </>
  );
};

export default Kinditem;
