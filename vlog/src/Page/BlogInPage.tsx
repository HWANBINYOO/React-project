import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Header, BlogAdd, Title, BlogIn } from "../component";
import { BlogType } from "../types";
import { useRecoilState } from "recoil";
import { BlogHeaderColor } from "../recoil/HeaderColorr";

const BlogInPage: React.FC = () => {
  const [HeaderColor, setHeaderColor] = useRecoilState(BlogHeaderColor);
  setHeaderColor("red");
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
