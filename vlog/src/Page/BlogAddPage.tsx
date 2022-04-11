import React from "react";
import Header from "../component/Header/Header";
import Title from "../component/Title/Title";
import BlogAdd from "../component/BlogAdd/BlogAdd";
import { useRecoilState } from "recoil";
import { BlogHeaderColor } from "../recoil/HeaderColor";

// interface Homes {
//   HeaderColor: string;
// }

// const BlogAddPage: React.FC<Homes> = ({ HeaderColor }) => {
const BlogAddPage: React.FC = () => {
  const [HeaderColor, setHeaderColor] = useRecoilState(BlogHeaderColor);
  setHeaderColor("red");
  return (
    <>
      <Title />
      {/* <Header HeaderColor={HeaderColor} /> */}
      <Header HeaderColor={HeaderColor} />
      <BlogAdd />
    </>
  );
};

export default BlogAddPage;
