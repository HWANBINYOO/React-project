import React from "react";
import Header from "../component/Header/Header";
import Title from "../component/Title/Title";
import BlogAdd from "../component/BlogAdd/BlogAdd";
import { useRecoilState } from "recoil";
import { BlogHeaderColor } from "../recoil/HeaderColor";
const BlogAddPage: React.FC = () => {
  const [HeaderColor, setHeaderColor] = useRecoilState(BlogHeaderColor);
  setHeaderColor("red");
  return (
    <>
      <Title />
      <Header HeaderColor={HeaderColor} />
      <BlogAdd />
    </>
  );
};

export default BlogAddPage;
