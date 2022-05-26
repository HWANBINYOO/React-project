import { useState } from "react";
import * as S from "./Styled";

const Home = () => {
  const [imghover1, setimgHover1] = useState("none");
  const [imghover2, setimgHover2] = useState("none");
  const [imghover3, setimgHover3] = useState("none");
  const [imghover4, setimgHover4] = useState("none");
  const [imghover5, setimgHover5] = useState("none");
  const [imghover6, setimgHover6] = useState("none");
  return (
    <>
      <S.HomeWapper>
        <S.Content
          backColor="#2E437B"
          onMouseEnter={() => setimgHover1("block")}
          onMouseLeave={() => setimgHover1("none")}
        >
          Denim
          <S.Img src={"/img/Denim.png"} Imgdisplay={imghover1} />
        </S.Content>
        <S.Content
          backColor="#273F55"
          onMouseEnter={() => setimgHover2("block")}
          onMouseLeave={() => setimgHover2("none")}
        >
          Pants Shorts
          <S.Img src={"/img/Pants.png"} Imgdisplay={imghover2} />
        </S.Content>
        <S.Content
          backColor="#A3A3A3"
          onMouseEnter={() => setimgHover3("block")}
          onMouseLeave={() => setimgHover3("none")}
        >
          Dresses
          <S.Img src={"/img/Dresses.png"} Imgdisplay={imghover3} />
        </S.Content>
        <S.Content
          backColor="#F5F5F5"
          color="black"
          onMouseEnter={() => setimgHover4("block")}
          onMouseLeave={() => setimgHover4("none")}
        >
          Sweatshirts
          <S.Img src={"/img/Sweatshirts.png"} Imgdisplay={imghover4} />
        </S.Content>
        <S.Content
          backColor="#AA111B"
          onMouseEnter={() => setimgHover5("block")}
          onMouseLeave={() => setimgHover5("none")}
        >
          Shoes
          <S.Img src={"/img/Shoes.png"} Imgdisplay={imghover5} />
        </S.Content>
        <S.Content
          backColor="#221F32"
          onMouseEnter={() => setimgHover6("block")}
          onMouseLeave={() => setimgHover6("none")}
        >
          Tops & Shirts
          <S.Img src={"/img/Shirts.png"} Imgdisplay={imghover6} />
        </S.Content>
      </S.HomeWapper>
    </>
  );
};

export default Home;
