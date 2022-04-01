/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";

interface Hom {
  id: number;
  Projects: any;
  onClick: (e: any) => void;
  alength: number;
  a: any;
}

const ProjectButton: React.FC<Hom> = ({
  id,
  Projects,
  onClick,
  alength,
  a,
}) => {
  const HandleonClick = (n: number) => {
    onClick((id = n));
  };

  return (
    <>
      <S.ShowButoons>
        {a.map((index: number) => (
          <S.Pbutton
            key={a.id}
            onClick={() => {
              HandleonClick(a.id);
            }}
          >
            {a.id}
          </S.Pbutton>
        ))}

        {/* <S.Pbutton
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
        </S.Pbutton> */}
      </S.ShowButoons>
    </>
  );
};

export default ProjectButton;
