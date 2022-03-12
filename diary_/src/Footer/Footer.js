import React from "react";
import * as S from "./FooterS";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <S.Footer>
        <Link to="/" className="icon-link">
          {" "}
          <span class="material-icons">light_mode</span>
        </Link>
      </S.Footer>
    </>
  );
};

export default Footer;
