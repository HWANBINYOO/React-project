/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";

interface Hom {
  id: number;
  Projects: any;
  handleProjects: any;
}

const ProjectButton: React.FC<Hom> = ({ id, Projects, handleProjects }) => {
  const CLickButton = () => {
    handleProjects((id = Projects.id));
  };
  return (
    <>
      <S.ShowButoons>
        {Projects.map((ProjectList: any) => (
          <S.ProjectButton onClick={CLickButton}>
            {ProjectList.id}
          </S.ProjectButton>
        ))}
      </S.ShowButoons>
    </>
  );
};

export default ProjectButton;
