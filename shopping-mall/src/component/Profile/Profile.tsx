import * as S from "./Styled";

const Profile = () => {
  return (
    <>
      <S.Postionner>
        <S.ContentWapper>
          <S.ProfileImg src={"/img/Profile.png"} />
          <S.InputsWapper>
            <S.InputBox>
              <S.InutTitle>이름</S.InutTitle>
              <S.Input type="text" />
            </S.InputBox>
            <S.InputBox>
              <S.InutTitle>비밀번호</S.InutTitle>
              <S.Input type="passWord" />
            </S.InputBox>
            <S.InputBox>
              <S.InutTitle>이메일</S.InutTitle>
              <S.Input type="text" />
            </S.InputBox>
            <S.InputBox>
              <S.InutTitle>비밀번호 변경</S.InutTitle>
              <S.Input type="text" />
            </S.InputBox>
          </S.InputsWapper>
          <S.BtnWapper>
            <S.Btn backColor="white">취소</S.Btn>
            <S.Btn backColor="#6284D9">수정</S.Btn>
          </S.BtnWapper>
        </S.ContentWapper>
      </S.Postionner>
    </>
  );
};

export default Profile;
