/* eslint-disable jsx-a11y/alt-text */
import ProjectItem from "../ProjectItem/ProjectItem";
import * as S from "./Styled";

interface Homes {
  id: number;
  name: string;
  term: number;
  cost: number;
  Ido: string;
  Projects: any;
}

const Project: React.FC<Homes> = ({ name, term, cost, Ido, Projects }) => {
  return (
    <>
      <S.Project>
        {Projects.map((ProjectList: any) => (
          <ProjectItem ProjectList={ProjectList} key={ProjectList.id} />
        ))}
      </S.Project>
    </>
  );
};

export default Project;
