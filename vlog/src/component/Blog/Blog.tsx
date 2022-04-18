import axios from "axios";
import { useEffect, useState } from "react";
import BlogItem from "../BlogItem/BlogItem";
import * as S from "./Styled";
import { BlogType } from "../../types";
import { Link } from "react-router-dom";
// import loadingImg from "/img/loading.gif";

// const a = [
// {
//   id: "1",
//   BlogImg: "/img/1day.gif",
//   title: "[React] 블로그만들기 1일차  Home/About 페이지만듬",
//   desc: "오늘 블로그프로젝트를 시작했다 아직 ts interface로  타입주는게 미숙하고 컴포넌트 간의 값전달하는것이 좀 여려워서 프로젝트를 하기로했다. 지금은 잘 못하지만 프로젝트 끝날떄 되면 아마 ts장인이 되어있을거다.",
//   date: "2022년3월26일",
// },
//   {
//     id: "2",
//     BlogImg: "/img/2day.gif",
//     title: "[React] 블로그만들기 3일차 Project페이지 기능구현 ",
//     desc: "오늘은 project 기능구현을 완성했다. 프로젝트 번호를 누르면 그숫자의 id를가진 프로젝트가 나타나게 하는기능이다. interface를 써서 타입값을 주는게 좀 어려웠다. 그리고 상태관리 공부도 좀 해야겠다고 생각했다.",
//     date: "2022년3월 31일",
//   },
//   {
//     id: "3",
//     BlogImg: "/img/3dayy.gif",
//     title: "[React] 블로그만들기 5일차 Home/About 페이지 디자인 ",
//     desc: "오늘은 Home/About 디자인을 했다 블로그에는 날 특징하는 사진을 넣어서 더 예쁘게 했다.(사진고르는게 젤 힘들었다..) 다 해놓고 보니까 더 디자인이 좋아져서 좋았다.",
//     date: "2022년4월1일",
//   },
//   {
//     id: "4",
//     BlogImg: "/img/2977.jpg",
//     title: "[React] 블로그만들기 7일차 Project 페이지 디자인,Blog 페이지 생성 ",
//     desc: "오늘은 Project 페이지를 마저 디자인했다 그리고 Blog 페이지를 생성했다.",
//     date: "2022년4월3일",
//   },
//   {
//     id: "5",
//     BlogImg: "/img/8day.gif",
//     title: "[React] 블로그만들기 8일차 Blog 페이지 서버연동 ",
//     desc: "오늘은 blog서버(성길)를 연동했다. 근데 생각해보니까 Blog 추가랑 Project 추가하는 기능구현도 하면 좋을것같고 블로그를 누르며 그 블로그 페이지로 들어가게하는게 좋을것 같아서 기능늘려고한다. ",
//     date: "2022년4월4일",
//   },
//   {
//     id: "6",
//     BlogImg: "/img/9day.jpg",
//     title: "[React] 블로그만들기 9일차 BlogIn 페이지 서버연동",
//     desc: "오늘은 Blog페이지에 블로그를 누르면 그 값만 보여주는 페이지를 서버랑 연동했다. 값들을 get으로갔고와서 css 로 꾸며줬다. img 주소전달하는게 좀 힘들었는데 img주소를 상대주소로말고 public에 img 파일 만들어서 절대주소로 보내줬더니 잘됬다",
//     date: "2022년4월5일",
//   },
//   {
//     id: "7",
//     BlogImg: "/img/10day.gif",
//     title: "[React] 블로그만들기 10일차 BlogIn 페이지추가하기",
//     desc: "오늘은 Blog페이지에 페이지 추가하기를 넣었다. 수정하기랑 삭제하기 기능도 넣으면 좋을것 같다. ",
//     date: "2022년4월6일",
//   },
// ];

const Blog: React.FC<BlogType> = () => {
  const [Blogs, setBlogs] = useState<BlogType[]>();
  //useEffet 훅에서 async 사용하기
  useEffect(() => {
    async function getblog() {
      try {
        setBlogs(await axios.get("/blog"));
      } catch (a: any) {
        console.log(a);
      }
    }

    getblog();
  }, []);

  return (
    <>
      <S.Blog>
        <S.BlogButtonBox>
          <Link to="/blogadd">
            <S.Button color="#aeddff">+</S.Button>
          </Link>
          <S.Button color="#fb7a74">x</S.Button>
        </S.BlogButtonBox>
        {Blogs ? (
          Blogs.map((item) => (
            <BlogItem
              key={item.id}
              BlogImg={item.BlogImg}
              title={item.title}
              desc={item.desc}
              date={item.date}
              id={item.id}
            />
          ))
        ) : (
          <S.Img src={"/img/loading.gif"} />
        )}
        {/* <Footer /> */}
      </S.Blog>
    </>
  );
};
export default Blog;
