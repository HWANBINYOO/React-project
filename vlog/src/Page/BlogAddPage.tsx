import React from "react";
import Header from "../component/Header/Header";
import Title from "../component/Title/Title";
import BlogAdd from "../component/BlogAdd/BlogAdd";
import { BlogTypeH } from "../types";

const BlogPage: React.FC<BlogTypeH> = ({
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
      <BlogAdd />
    </>
  );
};

export default BlogPage;
