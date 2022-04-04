import { useState } from "react";
import BlogItem from "../BlogItem/BlogItem";
import * as S from "./Styled";
// import kakaoImg from "../../Assets/kakao.png";
import manImg from "../../Assets/dhd.webp";
import songImg from "../../Assets/song.png";
import goodImg from "../../Assets/2977.jpg";
import startImg from "../../Assets/start.png";
// import Footer from "../Footer/Footer";

interface BlogType {
  id: number;
  BlogImg: string;
  title: string;
  desc: string;
  date: string;
}

const a = [
  {
    id: 1,
    BlogImg: startImg,
    title: "[React] 블로그만들기 1일차  Home/About 페이지만듬",
    desc: "오늘 블로그프로젝트를 시작했다 아직 ts interface로  타입주는게 미숙하고 컴포넌트 간의 값전달하는것이 좀 여려워서 프로젝트를 하게됬다.",
    date: "2022년3월26일",
  },
  {
    id: 2,
    BlogImg: manImg,
    title: "[React] 블로그만들기 3일차 Project페이지 기능구현 ",
    desc: "오늘은 project 기능구현을 완성했다. 프로젝트 번호를 누르면 그숫자의 id를가진 프로젝트가 나타나게 하는기능이다. ",
    date: "2022년3월 31일",
  },
  {
    id: 3,
    BlogImg: songImg,
    title: "[React] 블로그만들기 5일차 Home/About 페이지 디자인 ",
    desc: "오늘은 Home/About 디자인을 했다 블로그에는 날 특징하는 사진을 넣어서 더 예쁘게 했다.(사진고르는게 젤 힘들었다..)",
    date: "2022년4월1일",
  },
  {
    id: 4,
    BlogImg: goodImg,
    title: "[React] 블로그만들기 7일차 Project 페이지 디자인,Blog 페이지 생성 ",
    desc: "오늘은 Project 페이지를 디자인했다 그리고 Blog 페이지를 생성했다.",
    date: "2022년4월3일",
  },
  {
    id: 5,
    BlogImg: goodImg,
    title: "[React] 블로그만들기 8일차 Blog 페이지 서버연동 ",
    desc: "오늘은 blog서버(성길)를 연동했다. 근데 생각해보니까 Blog 추가랑 Project 추가하는 기능구현도 하면 좋을것같고 블로그를 누르며 그 블로그 페이지로 들어가게하는게 좋을것 같아서 기능늘려고한다. ",
    date: "2022년4월2일",
  },
];

const Blog: React.FC<BlogType> = () => {
  const [Blogs] = useState(a);
  return (
    <>
      <S.Blog>
        {Blogs.map((item) => (
          <BlogItem
            key={item.id}
            BlogImg={item.BlogImg}
            title={item.title}
            desc={item.desc}
            date={item.date}
            id={item.id}
          />
        ))}
        {/* <Footer /> */}
      </S.Blog>
    </>
  );
};
export default Blog;
