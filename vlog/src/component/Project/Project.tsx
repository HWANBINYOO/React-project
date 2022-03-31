/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import ProjectButton from "../ProjectButton/ProjectButton";
import ProjectItem from "../ProjectItem/ProjectItem";
import * as S from "./Styled";

interface Homes {
  id: number;
  name: string;
  term: number;
  cost: number;
  Ido: string;
}

const Project: React.FC<Homes> = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "DM",
      term: 50,
      cost: 30000,
      Ido: "DM 디자인과 로그인,게시판 구역을 프론트하는중이다.",
    },
    {
      id: 2,
      name: "blog",
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

  const handleProjects = (id: any): void => {
    setProjects(projects.filter((Pr) => Pr.id === id));
    handleProjectt(id);
  };

  let handleProjectt = (id: any): void => {
    projects.map((item) => item.id);
  };

  // useEffect(() => {
  //   handleProjects(1);
  // }, []);

  return (
    <>
      <S.Project>
        {projects.map((item) => (
          <ProjectItem
            key={item.id}
            name={item.name}
            term={item.term}
            cost={item.cost}
            Ido={item.Ido}
          />
        ))}

        {/* fillter 예시
            const result = words.filter(word => word.length > 6); */}
        {/* (projects.filter((Pr) => Pr.id === id)); */}

        <ProjectButton Projects={projects} id={1} onClick={handleProjects} />
      </S.Project>
    </>
  );
};

export default Project;
