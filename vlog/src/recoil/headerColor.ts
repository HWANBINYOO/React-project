import { atom } from "recoil";

export interface headerColor {
  default: string;
}

export const BlogHeaderColor = atom({
  key: "myblogHeaderColor",
  default: "blue",
});

export const MyProject = atom({
  key: "myProject",
  default: [
    {
      id: 1,
      name: "blog",
      term: "2주(예정)",
      cost: 0,
      Ido: "유환빈을 소개하는 웹사이트를 만드는중이에요",
      imgSrc: "/img/blog.png",
    },
    {
      id: 2,
      name: "DM(Diet-Management)",
      term: "50일(예정)",
      cost: 30000,
      Ido: "식단조절을 해주는 웹사이트를 만드는 중이에요",
      imgSrc: "/img/DM.png",
    },
    {
      id: 3,
      name: "Todolist",
      term: "3일",
      cost: 0,
      Ido: "Ts로 첫 프로젝트를 만들어봤어요",
      imgSrc: "/img/todolist.png",
    },
    {
      id: 4,
      name: "kakao",
      term: "2주",
      cost: 0,
      Ido: "카카오 웹사이트를 보면서 퍼블리싱했어요",
      imgSrc: "/img/kakao.png",
    },
  ],
});
