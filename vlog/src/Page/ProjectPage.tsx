import React from "react";
import Header from "../component/Header/Header";
import Project from "../component/Project/Project";
interface Homes {
  HeaderColor: string;
  id: number;
  name: string;
  term: number;
  cost: number;
  Ido: string;
  alength: number;
}

export const ProjectPage: React.FC<Homes> = ({
  HeaderColor,
  id,
  name,
  term,
  cost,
  Ido,
}) => {
  return (
    <>
      <Header HeaderColor={HeaderColor} />
      <Project id={1} name={""} term={0} cost={0} Ido={""} alength={0} />
    </>
  );
};

export default ProjectPage;
