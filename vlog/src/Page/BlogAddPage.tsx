import React from "react";
import { Header, BlogAdd, Title } from "../component";

import { useRecoilState } from "recoil";
import { BlogHeaderColor } from "../recoil/headerColor";
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
