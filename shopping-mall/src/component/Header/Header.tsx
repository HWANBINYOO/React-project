import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import * as S from "./Styled";

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["AccessToken"]);

  const TryLogout = () => {
    const navigate = useNavigate();
    const onLogout = () => {
      removeCookie("AccessToken");

      navigate("/");
    };
    return onLogout;
  };
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

            {cookies.AccessToken ? (
              <Link
                to="/signIn"
                style={{ textDecoration: "none", color: "black" }}
              >
                <S.LoginButton>로그인/가입</S.LoginButton>
              </Link>
            ) : (
              <Link
                to="/signIn"
                style={{ textDecoration: "none", color: "black" }}
              >
                <S.LoginButton onClick={TryLogout}>로그아웃</S.LoginButton>
              </Link>
            )}
          </S.HeaderRight>
        </S.HeaderBottom>
      </S.Header>
    </>
  );
};

export default Header;
