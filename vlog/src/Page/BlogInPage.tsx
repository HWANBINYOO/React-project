/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Header from "../component/Header/Header";
import Title from "../component/Title/Title";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogIn from "../component/BlogIn/BlogIn";
// import BlogItem from "../component/BlogItem/BlogItem";
import { BlogType } from "../types";

interface Homes {
  HeaderColor: string;
}

const BlogInPage: React.FC<Homes> = ({ HeaderColor }) => {
  const param = useParams();
  console.log(param);
  const [blogIn, setBlogIn] = useState<BlogType>();
  //   const BlogImg ;
  useEffect(() => {
    axios.get(`/blog/${param.id}`).then((res) => {
      setBlogIn(res.data);
      console.log(blogIn);
      console.log(res.data);
    });
  }, []);
  return (
    <>
      <Title />
      <Header HeaderColor={HeaderColor} />
      {blogIn ? <BlogIn blogIn={blogIn} /> : <div>로딩중</div>}
    </>
  );
};

export default BlogInPage;
