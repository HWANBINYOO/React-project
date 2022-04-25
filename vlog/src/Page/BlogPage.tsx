import React from "react";
import { Header, Blog, Title, Logout } from "../component";
import { useRecoilState } from "recoil";
import { BlogHeaderColor } from "../recoil/HeaderColorr";

interface BlogTtpe {
  BlogImg: string;
  date: string;
  title: string;
  desc: string;
  id: number;
}

const BlogPage: React.FC<BlogTtpe> = ({ BlogImg, date, title, desc }) => {
  return (
    <>
      <Title />
      <Logout />
      <Header HeaderColor={"red"} />
      <Blog BlogImg={""} date={""} title={""} desc={""} id={0} />
    </>
  );
};

export default BlogPage;
