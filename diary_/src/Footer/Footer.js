import React from "react";
import * as S from "./FooterS";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@material-ui/icons";
const Footer = () => {
  return (
    <>
      <S.Footer>
        <Link to="/" className="icon-link">
          {" "}
          <HomeOutlined />
        </Link>
      </S.Footer>
    </>
  );
};

export default Footer;
