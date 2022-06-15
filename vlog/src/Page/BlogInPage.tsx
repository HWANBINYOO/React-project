import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, BlogAdd, Title, BlogIn, HeaderRIght } from "../component";
import { BlogType } from "../types";
import { customAxios } from "../Libs/CustomAxois";

const BlogInPage: React.FC = () => {
  const param = useParams();
  console.log(param);
  const [blogIn, setBlogIn] = useState<BlogType>();
  // const BlogImg;

  useEffect(() => {
    async function getblogIn() {
      try {
        const response = await customAxios.get(`/board/${param.id}`);
        console.log(param.id);
        console.log(response.data);
        setBlogIn(response.data);
        console.log(blogIn);
      } catch (e: any) {
        const { data } = e.response;
        console.error("data : ", data);
      }
    }
    getblogIn();
  }, []);
  console.log(blogIn);
  return (
    <>
      <Title />
      <HeaderRIght />
      <Header HeaderColor={"red"} />
      {blogIn ? <BlogIn blogIn={blogIn} /> : <div>로딩중</div>}
    </>
  );
};

export default BlogInPage;
