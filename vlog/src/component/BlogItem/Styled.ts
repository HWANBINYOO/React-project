import styled from "styled-components";

type boxProps = {
  Xcenter: number;
  Ycenter: number;
  D?: number;
};

export const BlogItemWapper = styled.div`
  width: 300px;
  height: 450px;
  margin: 2rem 2rem;
  transition: transform 200ms;
  &:hover {
    transform: scale3d(1.03, 1.03, 1.03);
  }
`;

export const BlogItem = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px gray solid;
  border-radius: 9px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
  &:hover {
    box-shadow: ${(props: boxProps) =>
      `${-props.Xcenter / 5}px ${
        -props.Ycenter / 20
      }px 8px rgba(0, 0, 0, 0.2)`};
    /* transform: rotate3d(
      ${(props: boxProps) =>
      `${-props.Ycenter / 200},${props.Xcenter / 200},0,${
        props.D ? props.D / 12 : 1 / 8
      }deg `}
    ); */
  }
`;

export const TextBox = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  min-height: 310px;
  object-fit: cover;
  border-radius: 5px;
`;

export const Title = styled.h1`
  width: 100%;
  height: 30px;
  font-size: 1.7rem;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const desc = styled.div`
  width: 100%;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const ItemBottom = styled.div`
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
`;

export const BottomLeft = styled.div`
  display: flex;
  gap: 10px;
`;

export const MemberImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 20px;
    height: 20px;
    object-fit: cover;
    border-radius: 50%;
    border: none;
  }
`;

export const MemberId = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;

export const date = styled.div`
  color: gray;
`;
