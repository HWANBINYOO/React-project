import React from "react";
import Header from "../component/Header/Header";
import Title from "../component/Title/Title";
import Blog from "../component/Blog/Blog";

interface BlogTtpe {
  HeaderColor: string;
  BlogImg: string;
  date: string;
  title: string;
  desc: string;
  id: number;
}

const BlogPage: React.FC<BlogTtpe> = ({
  HeaderColor,
  BlogImg,
  date,
  title,
  desc,
}) => {
  return (
    <>
      <Title />
      <Header HeaderColor={HeaderColor} />
      <Blog BlogImg={""} date={""} title={""} desc={""} id={""} />
    </>
  );
};

export default BlogPage;
