import { useState } from "react";
import BlogItem from "../BlogItem/BlogItem";
import * as S from "./Styled";

interface BlogType {
  BlogImg: string;
  date: string;
  title: string;
  desc: string;
  id: number;
}

const a = [
  {
    id: 1,
    BlogImg: "img",
    title: "블로그 디자인",
    desc: "오늘 블로그 디자인 마저했다  오늘은 About 과 Project 를 꾸몄다",
    date: "2022년4월2일",
  },
  {
    id: 2,
    BlogImg: "img",
    title: "블로그 디자인",
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
