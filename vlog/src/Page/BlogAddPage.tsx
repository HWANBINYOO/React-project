import React from "react";
import { Header, BlogAdd, Title } from "../component";
import { useRecoilState } from "recoil";
import { BlogHeaderColor } from "../recoil/HeaderColorr";
const BlogAddPage: React.FC = () => {
  return (
    <>
      <Title />
      <Header HeaderColor={"red"} />
      <BlogAdd />
    </>
  );
};

export default BlogAddPage;
