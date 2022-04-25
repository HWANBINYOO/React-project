import Footer from "../Footer/Footer";
import * as S from "./Styled";

const Profile = () => {
  return (
    <>
      <S.Profile>
        <S.ProfileImpormation>
          <S.ProfileImg></S.ProfileImg>
          <S.UserName></S.UserName>
        </S.ProfileImpormation>
        <hr />
        <S.uploadBlogs></S.uploadBlogs>
        <Footer />
      </S.Profile>
    </>
  );
};

export default Profile;
