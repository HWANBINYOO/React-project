import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import ProjectButton from "../ProjectButton/ProjectButton";
import ProjectItem from "../ProjectItem/ProjectItem";
import * as S from "./Styled";
interface Homes {
  id: number;
  name: string;
  term: string;
  cost: number;
  Ido: string;
  imgSrc: string;
}
const a = [
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
];

const Project: React.FC<Homes> = () => {
  const [projects, setProjects] = useState(a);

  const handleProjects = (id: any): void => {
    setProjects(a.filter((Pr) => Pr.id === id));
    handleProjectt(id);
  };

  let handleProjectt = (id: any): void => {
    projects.map((item) => item.id);
  };

  useEffect(() => {
    handleProjects(1);
  }, []);

  return (
    <>
      <S.Project>
        <S.Img style={{ width: "40%" }} src={"/img/10day.gif"} />
        <S.ProjectTitle>내 프로젝트들</S.ProjectTitle>
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

          <ProjectButton Projects={projects} id={1} onClick={handleProjects} />
        </S.myProject>
        <Footer />
      </S.Project>
    </>
  );
};

export default Project;
