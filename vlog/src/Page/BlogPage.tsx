import React from "react";
import { Header, Blog, Title, HeaderRIght } from "../component";
import { BlogType } from "../types/BlogType";

const BlogPage: React.FC<BlogType> = () => {
  return (
    <>
      <Title />
      <HeaderRIght />
      <Header HeaderColor={"red"} />
      <Blog
        title={""}
        date={""}
        content={""}
        user_name={""}
        board_id={"0"}
        user_id={0}
      />
    </>
  );
};

export default BlogPage;
