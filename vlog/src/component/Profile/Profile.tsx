import Footer from "../Footer/Footer";
import * as S from "./Styled";

const Profile = () => {
  return (
    <>
      <S.Profile>
        <S.ProfileImpormation>
          <S.ProfileImg>0</S.ProfileImg>
          <S.User>
            <S.UserId>kim</S.UserId>
            <S.UserBlogs>2개!!</S.UserBlogs>
            <S.UserName>김성길!!!</S.UserName>
          </S.User>
        </S.ProfileImpormation>
        <hr />
        <S.uploadBlogs></S.uploadBlogs>
        <Footer />
      </S.Profile>
    </>
  );
};

export default Profile;
