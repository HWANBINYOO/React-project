import React, { useEffect, useState } from "react";
import Header from "../component/Header/Header";
import Title from "../component/Title/Title";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogIn from "../component/BlogIn/BlogIn";
// import BlogItem from "../component/BlogItem/BlogItem";

interface Homes {
  HeaderColor: string;
}

const BlogInPage: React.FC<Homes> = ({ HeaderColor }) => {
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
    .then((response) => {
      console.log(response);
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
