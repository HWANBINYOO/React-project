import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, BlogAdd, Title, BlogIn, HeaderRIght } from "../component";
import { BlogType } from "../types";
import { customAxios } from "../Libs/CustomAxois";
import * as S from "../component/Blog/Styled";

const BlogInPage: React.FC = () => {
  const param = useParams();
  const [blogIn, setBlogIn] = useState<BlogType>();
  // const BlogImg;

  useEffect(() => {
    async function getblogIn() {
      try {
        const response = await customAxios.get(`/board/${param.id}`);
        setBlogIn(response.data);
      } catch (e: any) {
        const { data } = e.response;
        console.error("data : ", data);
      }
    }
    getblogIn();
  }, []);

  return (
    <>
      <Title />
      <HeaderRIght />
      <Header HeaderColor={"red"} />
      {blogIn ? (
        <BlogIn blogIn={blogIn} />
      ) : (
        <S.Img
          src={
            "https://devlog-s3-bucket.s3.ap-northeast-2.amazonaws.com/Img/loading.gif"
          }
        />
      )}
    </>
  );
};

export default BlogInPage;
