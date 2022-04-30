import Footer from "../Footer/Footer";
import * as S from "./Styled";

const Profile = () => {
  return (
    <>
      <S.Profile>
        <S.ProfileImpormation>
          <S.ProfileImg>
            <img src={"/img/profile.png"} />
          </S.ProfileImg>
          <S.User>
            <S.UserName>유환빈</S.UserName>
            <S.UserBlogs>게시물 2</S.UserBlogs>
            <S.UserId>hwanbin_0825</S.UserId>
          </S.User>
        </S.ProfileImpormation>
        <S.Hr />
        <S.uploadBlogs>
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
          <img src={"/img/8day.gif"} />
        </S.uploadBlogs>
        <Footer />
      </S.Profile>
    </>
  );
};

export default Profile;
