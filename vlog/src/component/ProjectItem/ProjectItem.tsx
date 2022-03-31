/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";

interface Homes {
  name: string;
  term: number;
  cost: number;
  Ido: string;
}

export const ProjectItem = ({ name, term, cost, Ido }: Homes) => {
  return (
    <>
      <S.ProjectItem>
        <S.ProjectBox>
          <p>프로젝트명</p>
          {name}
        </S.ProjectBox>
        <S.ProjectBox>
          <p>프로젝트 기간</p>
          {term}
        </S.ProjectBox>
        <S.ProjectBox>
          <p>프로젝트비용</p>
          {cost}
        </S.ProjectBox>
        <S.ProjectBox>
          <p>한일</p>
          <span> {Ido}</span>
        </S.ProjectBox>
      </S.ProjectItem>
    </>
  );
};

export default ProjectItem;
