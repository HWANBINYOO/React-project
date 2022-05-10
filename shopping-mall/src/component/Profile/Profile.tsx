import * as S from "./Styled";

const Profile = () => {
  return (
    <>
      <S.Postionner>
        <S.MyImformation>
          <S.ProfileImg src={"/img/profile.png"} />
          <S.MyPrivacy>
            <S.MyPrivacyTop>
              <S.PrivacyLeft>name : 정재훈</S.PrivacyLeft>
              <S.EditBtn>프로필 수정</S.EditBtn>
            </S.MyPrivacyTop>
            <S.MyPrivacyMiddle>
              <S.PrivacyLeft>money : 100,000,000</S.PrivacyLeft>
              <S.EditBtn>충전</S.EditBtn>
            </S.MyPrivacyMiddle>
            <S.Email>email : woocom424@gmail.com</S.Email>
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
            <S.ListTitle>구매목록</S.ListTitle>
            <S.Mysale>
              <S.Sale>
                <S.SaleImg></S.SaleImg>
                <S.SaleImformation>
                  <S.ImTop>
                    <S.SaleName>로만손 남성 시계</S.SaleName>
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
