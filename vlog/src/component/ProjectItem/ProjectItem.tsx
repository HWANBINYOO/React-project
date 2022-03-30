/* eslint-disable jsx-a11y/alt-text */
import * as S from "./Styled";

interface Homes {
  ProjectList: any;
  name: string;
  term: number;
  cost: number;
  Ido: string;
}

export const ProjectItem: React.FC<Homes> = ({
  name,
  term,
  cost,
  Ido,
  ProjectList,
}: Homes) => {
  return (
    <>
      <S.ProjectItem>
        <S.ProjectBox>
          <p>프로젝트명</p>
          {ProjectList.name}
        </S.ProjectBox>
        <S.ProjectBox>
          <p>프로젝트 기간</p>
          {ProjectList.term}
        </S.ProjectBox>
        <S.ProjectBox>
          <p>프로젝트비용</p>
          {ProjectList.cost}
        </S.ProjectBox>
        <S.ProjectBox>
          <p>한일</p>
          <span> {ProjectList.Ido}</span>
        </S.ProjectBox>
      </S.ProjectItem>
    </>
  );
};

export default ProjectItem;
