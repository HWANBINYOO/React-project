/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";

interface Hom {
  id: number;
  Projects: any;
  onClick: (e: any) => void;
}

const ProjectButton: React.FC<Hom> = ({ id, Projects, onClick }) => {
  return (
    <>
      <S.ShowButoons>
        {Projects.map((ProjectList: any) => (
          <S.Pbutton onClick={onClick}>{ProjectList.id}</S.Pbutton>
        ))}
      </S.ShowButoons>
    </>
  );
};

export default ProjectButton;
