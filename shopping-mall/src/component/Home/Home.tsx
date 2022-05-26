import * as S from "./Styled";

const Home = () => {
  return (
    <>
      <S.HomeWapper>
        <S.Content backColor="#2E437B">Denim</S.Content>
        <S.Content backColor="#273F55">Pants Shorts</S.Content>
        <S.Content backColor="#A3A3A3">Dresses</S.Content>
        <S.Content backColor="#F5F5F5" color="black">
          Sweatshirts
        </S.Content>
        <S.Content backColor="#AA111B">Shoes</S.Content>
        <S.Content backColor="#221F32">Tops & Shirts</S.Content>
      </S.HomeWapper>
    </>
  );
};

export default Home;
