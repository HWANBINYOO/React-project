import React from "react";
import { Header, BlogAdd, Title, HeaderRIght } from "../component";
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
