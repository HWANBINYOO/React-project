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
          Imgdisplay={imghover1}
          hoverColor="white"
          onMouseEnter={() => setimgHover1("block")}
          onMouseLeave={() => setimgHover1("none")}
          onClick={() => onclick("Denim")}
          imgurl={"/img/Denim.png"}
        >
          <S.Span Imgdisplay={imghover1}>Denim</S.Span>
        </S.Content>
        <S.Content
          onMouseEnter={() => setimgHover2("block")}
          onMouseLeave={() => setimgHover2("none")}
          hoverColor="black"
          Imgdisplay={imghover2}
          color="white"
          backColor={"#273F55"}
          onClick={() => onclick("PantsShorts")}
          imgurl={"/img/PantsShorts.png"}
        >
          <S.Span Imgdisplay={imghover2}>Pants Shorts</S.Span>
        </S.Content>
        <S.Content
          onMouseEnter={() => setimgHover3("block")}
          onMouseLeave={() => setimgHover3("none")}
          backColor="#A3A3A3"
          color="white"
          hoverColor="black"
          Imgdisplay={imghover3}
          onClick={() => onclick("Dresses")}
          imgurl={"/img/Dresses.png"}
        >
          <S.Span Imgdisplay={imghover3}>Dresses</S.Span>
        </S.Content>
        <S.Content
          onMouseEnter={() => setimgHover4("block")}
          onMouseLeave={() => setimgHover4("none")}
          backColor="#F5F5F5"
          color="black"
          hoverColor="black"
          Imgdisplay={imghover4}
          onClick={() => onclick("Sweatshirts")}
          imgurl={"/img/Sweatshirts.png"}
        >
          <S.Span Imgdisplay={imghover4}>Sweatshirts</S.Span>
        </S.Content>
        <S.Content
          onMouseEnter={() => setimgHover5("block")}
          onMouseLeave={() => setimgHover5("none")}
          backColor="#AA111B"
          color="white"
          hoverColor="black"
          Imgdisplay={imghover5}
          onClick={() => onclick("Shoes")}
          imgurl={"/img/Shoes.png"}
        >
          <S.Span Imgdisplay={imghover5}>Shoes</S.Span>
        </S.Content>
        <S.Content
          onMouseEnter={() => setimgHover6("block")}
          onMouseLeave={() => setimgHover6("none")}
          backColor="#221F32"
          color="white"
          hoverColor="black"
          Imgdisplay={imghover6}
          onClick={() => onclick("TopsShirts")}
          imgurl={"/img/Shirts.png"}
        >
          <S.Span Imgdisplay={imghover6}>Tops & Shirts</S.Span>
        </S.Content>
      </S.HomeWapper>
    </>
  );
};

export default Home;
