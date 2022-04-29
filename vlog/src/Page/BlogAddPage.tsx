import React from "react";
import { Header, BlogAdd, Title, HeaderRIght } from "../component";
import { useRecoilState } from "recoil";
import { BlogHeaderColor } from "../recoil/HeaderColorr";
const BlogAddPage: React.FC = () => {
  return (
    <>
      <Title />
      <HeaderRIght />
      <Header HeaderColor={"red"} />
      <BlogAdd />
    </>
  );
};

export default BlogAddPage;
