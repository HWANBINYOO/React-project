import React, { useState } from "react";
import Header from "../component/Header/Header";
import Title from "../component/Title/Title";
import { useParams } from "react-router-dom";
import axios from "axios";
import BlogIn from "../component/BlogIn/BlogIn";
// import BlogItem from "../component/BlogItem/BlogItem";
// import Footer from "../component/Footer/Footer";

interface Homes {
  HeaderColor: string;
  BlogImgg:string;
}

const BlogInPage: React.FC<Homes> = ({ HeaderColor,BlogImgg }) => {
  const param = useParams();
  console.log(param);
  const [blogin, setBlogIn] = useState("");
  const BlogImgg ;

  axios
    .post(
      "/v1/blog",
      {
        id: param.id,
        title: param.title,
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then(({ data }) => {
      BlogImgg = 
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <>
      <Title />
      <Header HeaderColor={HeaderColor} />
      <BlogIn BlogImg={""} date={""} title={""} desc={""} id={0} />
      {/* <Footer /> */}
    </>
  );
};

export default BlogInPage;
