import React, { useState } from "react";
import Header from "../component/Header/Header";
import Project from "../component/Project/Project";

interface Homes {
  HeaderColor: string;
  id: number;
  name: string;
  term: number;
  cost: number;
  Ido: string;
}

export const ProjectPage: React.FC<Homes> = ({
  HeaderColor,
  id,
  name,
  term,
  cost,
  Ido,
}) => {
  const [Projects, setProjects] = useState([
    {
      id: 1,
      name: "DM",
      term: 50,
      cost: 30000,
      Ido: "DM 디자인과 로그인,게시판 구역을 프론트하는중이다.",
    },
    {
      id: 2,
      name: "Hlog",
      term: 4,
      cost: 0,
      Ido: "유환빈을 소개하는 웹사이트를 만드는중이다.",
    },
    {
      id: 3,
      name: "Todolist",
      term: 3,
      cost: 0,
      Ido: "Ts 첫 프로젝트로 만들어봤다",
    },
  ]);
  return (
    <>
      <Header HeaderColor={HeaderColor} />
      <Project
        Projects={Projects}
        id={0}
        name={""}
        term={0}
        cost={0}
        Ido={""}
      />
    </>
  );
};

export default ProjectPage;
