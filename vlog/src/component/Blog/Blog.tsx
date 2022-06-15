import axios from "axios";
import { useEffect, useState } from "react";
import BlogItem from "../BlogItem/BlogItem";
import * as S from "./Styled";
import { BlogType } from "../../types";
import { Link } from "react-router-dom";
import { customAxios } from "../../Libs/CustomAxois";
// import loadingImg from "/img/loading.gif";

const a = [
  {
    board_id: 2,
    user_id: 1,
    title: "[React] 블로그만들기 3일차 Project페이지 기능구현 ",
    content:
      "오늘은 project 기능구현을 완성했다. 프로젝트 번호를 누르면 그숫자의 id를가진 프로젝트가 나타나게 하는기능이다. interface를 써서 타입값을 주는게 좀 어려웠다. 그리고 상태관리 공부도 좀 해야겠다고 생각했다.",
    date: "2022-3-31",
    user_name: "유환빈",
  },
  {
    board_id: 3,
    user_id: 1,
    title: "[React] 블로그만들기 5일차 Home/About 페이지 디자인 ",
    content:
      "오늘은 Home/About 디자인을 했다 블로그에는 날 특징하는 사진을 넣어서 더 예쁘게 했다.(사진고르는게 젤 힘들었다..) 다 해놓고 보니까 더 디자인이 좋아져서 좋았다.",
    date: "2022-4-1",
    user_name: "유환빈",
  },
  {
    board_id: 4,
    user_id: 1,
    title: "[React] 블로그만들기 7일차 Project 페이지 디자인,Blog 페이지 생성 ",
    content:
      "오늘은 Project 페이지를 마저 디자인했다 그리고 Blog 페이지를 생성했다.",
    date: "2022-4-3",
    user_name: "유환빈",
  },
  {
    board_id: 5,
    user_id: 1,
    title: "[React] 블로그만들기 8일차 Blog 페이지 서버연동 ",
    content:
      "오늘은 blog서버(성길)를 연동했다. 근데 생각해보니까 Blog 추가랑 Project 추가하는 기능구현도 하면 좋을것같고 블로그를 누르며 그 블로그 페이지로 들어가게하는게 좋을것 같아서 기능늘려고한다. ",
    date: "2022-4-4",
    user_name: "유환빈",
  },
  {
    board_id: 7,
    user_id: 1,
    title: "[React] 블로그만들기 10일차 BlogIn 페이지추가하기",
    content:
      "오늘은 Blog페이지에 페이지 추가하기를 넣었다. 수정하기랑 삭제하기 기능도 넣으면 좋을것 같다. ",
    date: "2022-4-6",
    user_name: "유환빈",
  },
  {
    board_id: 6,
    user_id: 1,
    title: "[React] 블로그만들기 9일차 BlogIn 페이지 서버연동",
    content:
      "오늘은 Blog페이지에 블로그를 누르면 그 값만 보여주는 페이지를 서버랑 연동했다. 값들을 get으로갔고와서 css 로 꾸며줬다. img 주소전달하는게 좀 힘들었는데 img주소를 상대주소로말고 public에 img 파일 만들어서 절대주소로 보내줬더니 잘됬다",
    date: "2022-4-5",
    user_name: "유환빈",
  },
  {
    board_id: 1,
    user_id: 1,
    title: "[React] 블로그만들기 1일차  Home/About 페이지만듬",
    content:
      "오늘 블로그프로젝트를 시작했다 아직 ts interface로  타입주는게 미숙하고 컴포넌트 간의 값전달하는것이 좀 여려워서 프로젝트를 하기로했다. 지금은 잘 못하지만 프로젝트 끝날떄 되면 아마 ts장인이 되어있을거다.",
    date: "2022-3-26",
    user_name: "유환빈",
  },
];

const Blog: React.FC<BlogType> = () => {
  const [Blogs, setBlogs] = useState<BlogType[]>();
  // useEffet 훅에서 async 사용하기
  useEffect(() => {
    async function getblog() {
      try {
        const response = await customAxios.get("/board");

        setBlogs(response.data.blogs);
      } catch (e: any) {
        console.log(e);
      }
    }
    getblog();
  }, []);
  console.log(Blogs);

  function date_descending(a: any, b: any) {
    let dateA = new Date(a["date"]).getTime();
    let dateB = new Date(b["date"]).getTime();
    return dateA < dateB ? 1 : -1;
  }

  return (
    <>
      <S.Blog>
        <S.BlogButtonBox>
          <Link to="/boardadd">
            <S.Button color="#aeddff">+</S.Button>
          </Link>
          <S.Button color="#fb7a74">x</S.Button>
        </S.BlogButtonBox>
        <S.BLogWarpper>
          {Blogs ? (
            Blogs.sort(date_descending).map((item, index) => (
              <BlogItem
                key={index}
                board_id={item.board_id}
                user_id={item.user_id}
                user_name={item.user_name}
                title={item.title}
                content={item.content}
                date={item.date}
              />
            ))
          ) : (
            <S.Img src={"/img/loading.gif"} />
          )}
        </S.BLogWarpper>
      </S.Blog>
    </>
  );
};
export default Blog;
