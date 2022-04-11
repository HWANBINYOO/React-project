import React from "react";
import { useRecoilState } from "recoil";
import Header from "../component/Header/Header";
import Project from "../component/Project/Project";
import Title from "../component/Title/Title";
import { BlogHeaderColor } from "../recoil/HeaderColor";
interface Homes {
  id: number;
  name: string;
  term: string;
  cost: number;
  Ido: string;
  alength: number;
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
      <Project
        id={1}
        name={""}
        term={""}
        cost={0}
        Ido={""}
        imgSrc={""}
        alength={0}
      />
    </>
  );
};

export default ProjectPage;
