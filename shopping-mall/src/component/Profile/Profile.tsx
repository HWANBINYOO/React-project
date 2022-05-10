import * as S from "./Styled";

const Profile = () => {
  return (
    <>
      <S.Postionner>
        <S.MyImformation>
          <S.ProfileImg />
          <S.MyPrivacy>
            <S.MyPrivacyTop>
              <S.Name>정재훈</S.Name>
              <S.EditBtn></S.EditBtn>
            </S.MyPrivacyTop>
            <S.Money>1000,000,000</S.Money>
            <S.Email>woocom424@gmail.com</S.Email>
          </S.MyPrivacy>
        </S.MyImformation>
        <S.MyLists>
          <S.MyList>
            <S.ListTitle>판매목록</S.ListTitle>
            <S.Mysale>
              <S.Sale>
                <S.SaleImg></S.SaleImg>
                <S.SaleImformation>
                  <S.ImTop>
                    <S.SaleName>로만손 남성 시계</S.SaleName>
                    <S.DelectBtn>x</S.DelectBtn>
                  </S.ImTop>
                  <S.EmdDate>경매 만료일:2022년 5월 5일</S.EmdDate>
                </S.SaleImformation>
              </S.Sale>
            </S.Mysale>
          </S.MyList>

          <S.MyList>
            <S.ListTitle>경매목록</S.ListTitle>
            <S.Mysale>
              <S.Sale>
                <S.SaleImg></S.SaleImg>
                <S.SaleImformation>
                  <S.ImTop>
                    <S.SaleName>로만손 남성 시계</S.SaleName>
                    <S.DelectBtn>x</S.DelectBtn>
                  </S.ImTop>
                  <S.ActionMoney>참여 금액:580,000</S.ActionMoney>
                  <S.EmdDate>경매 만료일:2022년 5월 5일</S.EmdDate>
                </S.SaleImformation>
              </S.Sale>
            </S.Mysale>
          </S.MyList>

          <S.MyList>
            <S.Mysale>
              <S.Sale>
                <S.SaleImg></S.SaleImg>
                <S.SaleImformation>
                  <S.ImTop>
                    <S.SaleName>로만손 남성 시계</S.SaleName>
                    <S.DelectBtn>x</S.DelectBtn>
                  </S.ImTop>
                  <S.EmdDate>경매 만료일:2022년 5월 5일</S.EmdDate>
                </S.SaleImformation>
              </S.Sale>
            </S.Mysale>
          </S.MyList>
        </S.MyLists>
      </S.Postionner>
    </>
  );
};

export default Profile;
