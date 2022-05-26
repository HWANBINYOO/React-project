import { Link } from "react-router-dom";
import * as S from "./Styled";

const Header = () => {
  return (
    <>
      <S.Header>
        <S.HeaderBottom>
          <S.CircleImg src={"/img/Ellipse.png"} />
          <S.Mainlogo src={"/img/Wear.png"} />
          <S.HeaderRight>
            <S.HeaderLogos>
              {/* <S.ProfileImg src={"/img/menu.png"} ></S.ProfileImg> */}
              <S.ProfileImg src={"/img/searchIcon.png"} />
              <S.ProfileImg src={"/img/basket.png"} />
            </S.HeaderLogos>
            <Link
              to="/signIn"
              style={{ textDecoration: "none", color: "black" }}
            >
              <S.LoginButton>로그인/가입</S.LoginButton>
            </Link>
          </S.HeaderRight>
        </S.HeaderBottom>
      </S.Header>
    </>
  );
};

export default Header;
