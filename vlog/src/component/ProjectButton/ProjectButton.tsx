/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";

interface Hom {
  id: number;
  Projects: any;
  onClick: (e: any) => void;
}

const ProjectButton: React.FC<Hom> = ({ id, Projects, onClick }) => {
  const HandleonClick = (n: number) => {
    onClick((id = n));
  };

  return (
    <>
      <S.ShowButoons>
        <S.Pbutton
          onClick={() => {
            HandleonClick(1);
          }}
        >
          1
        </S.Pbutton>
        <S.Pbutton
          onClick={() => {
            HandleonClick(2);
          }}
        >
          2
        </S.Pbutton>
        <S.Pbutton
          onClick={() => {
            HandleonClick(3);
          }}
        >
          3
        </S.Pbutton>
        <S.Pbutton
          onClick={() => {
            HandleonClick(4);
          }}
        >
          4
        </S.Pbutton>
      </S.ShowButoons>
    </>
  );
};

export default ProjectButton;
