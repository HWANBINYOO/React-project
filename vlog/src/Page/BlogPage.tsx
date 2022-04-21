import React from "react";
import { Header, Blog, Title } from "../component";

import { useRecoilState } from "recoil";
import { BlogHeaderColor } from "../recoil/HeaderColorr";

interface BlogTtpe {
  BlogImg: string;
  date: string;
  title: string;
  desc: string;
  id: number;
}

const BlogPage: React.FC<BlogTtpe> = ({ BlogImg, date, title, desc }) => {
  const [HeaderColor, setHeaderColor] = useRecoilState(BlogHeaderColor);
  setHeaderColor("red");
  return (
    <>
      <Title />
      <Header HeaderColor={HeaderColor} />
      <Blog BlogImg={""} date={""} title={""} desc={""} id={0} />
    </>
  );
};

export default BlogPage;
