import React from "react";
import Header from "../component/Header/Header";
import Title from "../component/Title/Title";
import BlogAdd from "../component/BlogAdd/BlogAdd";

interface Homes {
  HeaderColor: string;
}

const BlogAddPage: React.FC<Homes> = ({ HeaderColor }) => {
  return (
    <>
      <Title />
      <Header HeaderColor={HeaderColor} />
      <BlogAdd />
    </>
  );
};

export default BlogAddPage;
