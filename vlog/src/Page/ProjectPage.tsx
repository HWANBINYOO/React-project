import React from "react";
import { Footer } from "../component/Footer/Styled";
import Header from "../component/Header/Header";
import Project from "../component/Project/Project";
import Title from "../component/Title/Title";
interface Homes {
  HeaderColor: string;
  id: number;
  name: string;
  term: string;
  cost: number;
  Ido: string;
  alength: number;
  imgSrc: string;
}

const ProjectPage: React.FC<Homes> = ({
  HeaderColor,
  id,
  name,
  term,
  cost,
  Ido,
  imgSrc,
}) => {
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
      <Footer />
    </>
  );
};

export default ProjectPage;
