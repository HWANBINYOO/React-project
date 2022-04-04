import { useState } from "react";
import BlogItem from "../BlogItem/BlogItem";
import * as S from "./Styled";
import kakaoImg from "../../Assets/kakao.png";
import manImg from "../../Assets/dhd.webp";
import songImg from "../../Assets/song.png";
import goodImg from "../../Assets/2977.jpg";
import carImg from "../../Assets/car.webp";

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
    BlogImg: kakaoImg,
    title: "[React] 블로그만들기 5일차 About/Project 디자인",
    desc: "오늘 블로그 디자인 마저했다  오늘은 About 과 Project 를 꾸몄다",
    date: "2022년4월2일",
  },
  {
    id: 2,
    BlogImg: manImg,
    title: "블로그",
    desc: "오늘 블로그 디자인 마저했다  오늘은 About 과 Project 를 꾸몄다",
    date: "2022년4월2일",
  },
  {
    id: 3,
    BlogImg: songImg,
    title: "블로그 ",
    desc: "오늘 블로그 디자인 마저했다  오늘은 About 과 Project 를 꾸몄다",
    date: "2022년4월2일",
  },
  {
    id: 4,
    BlogImg: goodImg,
    title: "블로그",
    desc: "오늘 블로그 디자인 마저했다  오늘은 About 과 Project 를 꾸몄다",
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
            id={0}
          />
        ))}
      </S.Blog>
    </>
  );
};
export default Blog;
