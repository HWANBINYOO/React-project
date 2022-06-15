import React from "react";
import { useRecoilState } from "recoil";
import { HeaderRIght, Header, Project, Title } from "../component";
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
  return (
    <>
      <Title />
      <HeaderRIght />
      <Header HeaderColor={"Orange"} />
      <Project id={1} name={""} term={""} cost={0} Ido={""} imgSrc={""} />
    </>
  );
};

export default ProjectPage;
