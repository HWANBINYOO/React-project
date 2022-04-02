/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import ProjectButton from "../ProjectButton/ProjectButton";
import ProjectItem from "../ProjectItem/ProjectItem";
import ProjectImg from "../../Assets/ProjectImg.jpg";
import DMImg from "../../Assets/dmm.png";
import TodolistImg from "../../Assets/todolist.png";
import BlogImg from "../../Assets/blog.png";
import kakaoImg from "../../Assets/kakao.png";

import * as S from "./Styled";

interface Homes {
  id: number;
  name: string;
  term: string;
  cost: number;
  Ido: string;
  alength: number;
  imgSrc: string;
}

const a = [
  {
    id: 1,
    name: "DM(Diet-Management)",
    term: "50일(예정)",
    cost: 30000,
    Ido: "DM 디자인과 로그인,게시판 구역을 프론트하는중이다.",
    imgSrc: DMImg,
  },
  {
    id: 2,
    name: "blog",
    term: "2주(예정)",
    cost: 0,
    Ido: "유환빈을 소개하는 웹사이트를 만드는중이다.",
    imgSrc: BlogImg,
  },
  {
    id: 3,
    name: "Todolist",
    term: "3일",
    cost: 0,
    Ido: "Ts 첫 프로젝트로 만들어봤다",
    imgSrc: TodolistImg,
  },
  {
    id: 4,
    name: "kakao",
    term: "2주",
    cost: 0,
    Ido: "카카오 웹사이트를 보면서 퍼블리싱했다",
    imgSrc: kakaoImg,
  },
];

const Project: React.FC<Homes> = () => {
  const [projects, setProjects] = useState(a);
  let alength = a.length;

  const handleProjects = (id: any): void => {
    setProjects(a.filter((Pr) => Pr.id === id));
    handleProjectt(id);
  };

  let handleProjectt = (id: any): void => {
    projects.map((item) => item.id);
  };

  useEffect(() => {
    handleProjects(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <S.Project>
        <S.Img style={{ width: "40%" }} src={ProjectImg} />
        <S.ProjectTitle>저의 프로젝트들</S.ProjectTitle>
        <S.myProject>
          {projects.map((item) => (
            <ProjectItem
              key={item.id}
              name={item.name}
              term={item.term}
              cost={item.cost}
              Ido={item.Ido}
              imgSrc={item.imgSrc}
            />
          ))}

          <ProjectButton
            a={a}
            alength={alength}
            Projects={projects}
            id={1}
            onClick={handleProjects}
          />
        </S.myProject>
        <Footer />
      </S.Project>
    </>
  );
};

export default Project;
