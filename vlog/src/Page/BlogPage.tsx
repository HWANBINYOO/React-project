import React from "react";
import { Header, Blog, Title, HeaderRIght } from "../component";
import { useRecoilState } from "recoil";
import { BlogHeaderColor } from "../recoil/HeaderColorr";
import { BlogType } from "../types/BlogType";

const BlogPage: React.FC<BlogType> = () => {
  return (
    <>
      <Title />
      <HeaderRIght />
      <Header HeaderColor={"red"} />
      <Blog name={""} date={""} title={""} desc={""} />
    </>
  );
};

export default BlogPage;
