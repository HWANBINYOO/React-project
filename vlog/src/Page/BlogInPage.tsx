import React, { useState } from "react";
import Header from "../component/Header/Header";
import Title from "../component/Title/Title";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogIn from "../component/BlogIn/BlogIn";
// import BlogItem from "../component/BlogItem/BlogItem";

interface Homes {
  HeaderColor: string;
  BlogImg: string;
}

const BlogInPage: React.FC<Homes> = ({ HeaderColor, BlogImg }) => {
  const param = useParams();
  console.log(param);
  //   const [blogIn, setBlogIn] = useState([]);
  //   const BlogImg ;

  axios
    .get("/blog", {
      params: {
        id: param.id,
        title: param.title,
      },
    })
    .then(function (response) {
      console.log(response);
      //   setBlogIn(data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <>
      <Title />
      <Header HeaderColor={HeaderColor} />
      {/* <BlogIn blogIn={blogIn} /> */}
    </>
  );
};

export default BlogInPage;
