import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./Styled";

const Kinditem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onclick = (id: number) => {
    console.log(location.pathname);

    navigate(`${location.pathname}/${id}`);
  };
  return (
    <>
      <S.KinditemWapper onClick={() => onclick(1)}>
        <S.Img />
        <S.ContentBox>
          <S.Wear>Wear</S.Wear>
          <S.Decs>빅사이즈 와이드 일자 데님팬츠</S.Decs>
        </S.ContentBox>
      </S.KinditemWapper>

      <S.KinditemWapper>
        <S.Img />
        <S.ContentBox>
          <S.Wear>Wear</S.Wear>
          <S.Decs>빅사이즈 와이드 일자 데님팬츠</S.Decs>
        </S.ContentBox>
      </S.KinditemWapper>

      <S.KinditemWapper>
        <S.Img />
        <S.ContentBox>
          <S.Wear>Wear</S.Wear>
          <S.Decs>빅사이즈 와이드 일자 데님팬츠</S.Decs>
        </S.ContentBox>
      </S.KinditemWapper>

      <S.KinditemWapper>
        <S.Img />
        <S.ContentBox>
          <S.Wear>Wear</S.Wear>
          <S.Decs>빅사이즈 와이드 일자 데님팬츠</S.Decs>
        </S.ContentBox>
      </S.KinditemWapper>

      <S.KinditemWapper>
        <S.Img />
        <S.ContentBox>
          <S.Wear>Wear</S.Wear>
          <S.Decs>빅사이즈 와이드 일자 데님팬츠</S.Decs>
        </S.ContentBox>
      </S.KinditemWapper>

      <S.KinditemWapper>
        <S.Img />
        <S.ContentBox>
          <S.Wear>Wear</S.Wear>
          <S.Decs>빅사이즈 와이드 일자 데님팬츠</S.Decs>
        </S.ContentBox>
      </S.KinditemWapper>

      <S.KinditemWapper>
        <S.Img />
        <S.ContentBox>
          <S.Wear>Wear</S.Wear>
          <S.Decs>빅사이즈 와이드 일자 데님팬츠</S.Decs>
        </S.ContentBox>
      </S.KinditemWapper>
    </>
  );
};

export default Kinditem;
