import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../config/config";
import { KindType } from "../../types";
import * as S from "./Styled";

export default function KindIn() {
  const [SelectedColor, setSelectedColor] = useState("");
  const [SelectedSize, setSelectedSize] = useState("");
  const [HeaderInput, setHeaderInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [kindIn, setKindIn] = useState<KindType>();
  const [myimgurl, userMyimgurl] = useState<string>();
  const param = useParams();

  useEffect(() => {
    console.log(location.pathname);
    async function getKind() {
      try {
        const { data } = await axios.get(`${baseURL}/${location.pathname}`);
        console.log(data);
        setKindIn(data);
        userMyimgurl(data.imgurl);
      } catch (e: any) {
        const { data } = e.response;
        console.error(data.message);
      }
    }
    getKind();
  }, [location.pathname]);

  const onHome = () => {
    navigate("/");
  };

  //구매하기로
  const onButtonClick = async (name: string) => {
    // try {
    //   await axios.post(`${baseURL}/${name}/${param.id}`, {
    //     product: kindIn?.id,
    //     colors: SelectedColor,
    //     size: SelectedSize,
    //   });
      navigate(`/${name}/${param.id}`);
    //   console.log(param.id);
    // } catch (e: any) {
    //   const { data } = e.response;
    //   console.error(data.message);
    // }
  };

  return (
    <S.KindInWapper>
      <S.Header>
        <S.RIghtWapper></S.RIghtWapper>
        <S.MainLogo src={"/img/Wear.png"} onClick={onHome} />
        <S.InputBox>
          <S.SearchInput
            placeholder="어떤 상품을 찾으신가요?"
            onChange={(e) => setHeaderInput(e.target.value)}
            value={HeaderInput}
          />
          <S.SearchIcon src={"/img/searchIcon.png"} />
        </S.InputBox>
      </S.Header>
      <S.Contents>
        <S.LeftContent>
          <S.SuggestWapper>
            <S.SuggestTitle>상의</S.SuggestTitle>
            <S.SuggestImg />
          </S.SuggestWapper>
          <S.SuggestWapper>
            <S.SuggestTitle>아우터</S.SuggestTitle>
            <S.SuggestImg />
          </S.SuggestWapper>
        </S.LeftContent>
        <S.KindInImgWapper>
          <S.KindInImg src={myimgurl} />
        </S.KindInImgWapper>
        <S.KindRight>
          <S.KindDecs>
            <S.KindTitle>{kindIn?.title}</S.KindTitle>
            <S.KindSize>
              <p>XS(25):허리 34.5 밑위 26 허벅지 29 밑단 20 총장 96.5</p>
              <p>S(26):허리 38 밑위 27 허벅지 30 밑단 21 총장 98</p>
              <p>M(28):허리 39.5 밑위28 허벅지 31 밑단 22 총장 99.5</p>
              <p>L(30):허리 41 밑위 29 허벅지 32밑단 23 총장 101</p>
              <p>XL(32):허리 42.5 밑위 30 허벅지 33 밑단 24 총장 102.5</p>
              <p>2XL(34):허리 44 밑위 32 허벅지 34 밑단 25 총장 104</p>
            </S.KindSize>
          </S.KindDecs>
          <S.KindCost>
            <S.KindTop>{kindIn?.prise}</S.KindTop>
            <S.hr />
            <S.KindCostBottom>
              <S.KindChoose>옵션선택</S.KindChoose>
              <S.KindOption>
                <select
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="SelectTop"
                >
                  <option value="">색상</option>
                  <option value="학생">갈색</option>
                  <option value="회사원">회색</option>
                  <option value="기타">기타</option>
                </select>

                <select
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="SelectBottom"
                >
                  <option value="">사이즈</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="2XL">2XL</option>
                </select>
              </S.KindOption>
            </S.KindCostBottom>
          </S.KindCost>
          <S.Buttons>
            <S.Btn>장바구니</S.Btn>
            <S.Btn
              onClick={() => {
                onButtonClick("Buy");
              }}
            >
              구매하기
            </S.Btn>
          </S.Buttons>
        </S.KindRight>
      </S.Contents>
    </S.KindInWapper>
  );
}
