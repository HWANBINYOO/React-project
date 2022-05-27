import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styled";

const Home = () => {
  const [imghover1, setimgHover1] = useState("none");
  const [imghover2, setimgHover2] = useState("none");
  const [imghover3, setimgHover3] = useState("none");
  const [imghover4, setimgHover4] = useState("none");
  const [imghover5, setimgHover5] = useState("none");
  const [imghover6, setimgHover6] = useState("none");
  const navigate = useNavigate();

  const onclick = (name: string) => {
    navigate(`/kind/${name}`);
  };

  return (
    <>
      <S.HomeWapper>
        <S.Content
          backColor="#2E437B"
          color="white"
          hoverColor="white"
          Imgdisplay={imghover1}
          onMouseEnter={() => setimgHover1("block")}
          onMouseLeave={() => setimgHover1("none")}
          onClick={() => onclick("Denim")}
        >
          <S.Span Imgdisplay={imghover1}>Denim</S.Span>
          <S.Img src={"/img/Denim.png"} Imgdisplay={imghover1} />
        </S.Content>
        <S.Content
          onMouseEnter={() => setimgHover2("block")}
          onMouseLeave={() => setimgHover2("none")}
          backColor="#273F55"
          color="white"
          Imgdisplay={imghover2}
          hoverColor="black"
          onClick={() => onclick("PantsShorts")}
        >
          <S.Span Imgdisplay={imghover2}>Pants Shorts</S.Span>
          <S.Img src={"/img/PantsShorts.png"} Imgdisplay={imghover2} />
        </S.Content>
        <S.Content
          onMouseEnter={() => setimgHover3("block")}
          onMouseLeave={() => setimgHover3("none")}
          backColor="#A3A3A3"
          color="white"
          hoverColor="black"
          Imgdisplay={imghover3}
          onClick={() => onclick("Dresses")}
        >
          <S.Span Imgdisplay={imghover3}>Dresses</S.Span>
          <S.Img src={"/img/Dresses.png"} Imgdisplay={imghover3} />
        </S.Content>
        <S.Content
          onMouseEnter={() => setimgHover4("block")}
          onMouseLeave={() => setimgHover4("none")}
          backColor="#F5F5F5"
          color="black"
          hoverColor="black"
          Imgdisplay={imghover4}
          onClick={() => onclick("Sweatshirts")}
        >
          <S.Span Imgdisplay={imghover4}>Sweatshirts</S.Span>
          <S.Img src={"/img/Sweatshirts.png"} Imgdisplay={imghover4} />
        </S.Content>
        <S.Content
          onMouseEnter={() => setimgHover5("block")}
          onMouseLeave={() => setimgHover5("none")}
          backColor="#AA111B"
          color="white"
          hoverColor="black"
          Imgdisplay={imghover5}
          onClick={() => onclick("Shoes")}
        >
          <S.Span Imgdisplay={imghover5}>Shoes</S.Span>
          <S.Img src={"/img/Shoes.png"} Imgdisplay={imghover5} />
        </S.Content>
        <S.Content
          onMouseEnter={() => setimgHover6("block")}
          onMouseLeave={() => setimgHover6("none")}
          backColor="#221F32"
          color="white"
          hoverColor="black"
          Imgdisplay={imghover6}
          onClick={() => onclick("Shirts")}
        >
          <S.Span Imgdisplay={imghover6}>Tops & Shirts</S.Span>
          <S.Img src={"/img/Shirts.png"} Imgdisplay={imghover6} />
        </S.Content>
      </S.HomeWapper>
    </>
  );
};

export default Home;
