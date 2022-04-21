import React from "react";
import { useRecoilState } from "recoil";
import Header from "../component/Header/Header";
import Project from "../component/Project/Project";
import Title from "../component/Title/Title";
import { BlogHeaderColor } from "../recoil/HeaderColorr";
interface Homes {
  id: number;
  name: string;
  term: string;
  cost: number;
  Ido: string;
  imgSrc: string;
}

const ProjectPage: React.FC<Homes> = ({
  id,
  name,
  term,
  cost,
  Ido,
  imgSrc,
}) => {
  const [HeaderColor, setHeaderColor] = useRecoilState(BlogHeaderColor);
  setHeaderColor("Orange");
  return (
    <>
      <Title />
      <Header HeaderColor={HeaderColor} />
      <Project id={1} name={""} term={""} cost={0} Ido={""} imgSrc={""} />
    </>
  );
};

export default ProjectPage;
