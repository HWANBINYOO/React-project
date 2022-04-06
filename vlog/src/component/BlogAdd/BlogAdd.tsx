/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";
import { BlogType } from "../../types";
import Footer from "../Footer/Footer";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface BlogTypeProp {
  blogIn: BlogType;
}

const BlogAdd = () => {
  return (
    <>
      <S.BlogAdd>
        <input type="text" />
        <label htmlFor=""></label>
      </S.BlogAdd>
    </>
  );
};

export default BlogAdd;
