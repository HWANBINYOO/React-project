/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";

interface Homes {
  name: string;
  term: string;
  cost: number;
  Ido: string;
  imgSrc: string;
}

export const ProjectItem = ({ name, term, cost, Ido, imgSrc }: Homes) => {
  return (
    <>
      <S.ProjectItem>
        <S.Img src={imgSrc} />
        <S.Projectdesc>
          <S.ProjectBox>
            <p>name:</p>
            {name}
          </S.ProjectBox>
          <S.ProjectBox>
            <p>term :</p>
            {term}
          </S.ProjectBox>
          <S.ProjectBox>
            <p>cost :</p>
            {cost}원
          </S.ProjectBox>
          <S.ProjectBox>
            <p>do : </p>
            <span> {Ido}</span>
          </S.ProjectBox>
        </S.Projectdesc>
      </S.ProjectItem>
    </>
  );
};

export default ProjectItem;
