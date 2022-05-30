import styled from "styled-components";

type KindProps = {
  Inputdisplay: boolean;
};

type SearchBarWidth = {
  SearchWidth: number;
};

export const KindWapper = styled.div`
  position: absolute;
  right: 0;
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const KindHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const KindInput = styled.input`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  width: 80%;
  display: ${(props: KindProps) => (props.Inputdisplay ? "block" : "none")};
`;

export const SearchBarWapper = styled.div`
  width: ${(props: SearchBarWidth) => props.SearchWidth}px;
  height: 60%;
  margin-right: 30px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  transition: all ease 0.2s 0s;
`;

export const SearBarimg = styled.img`
  width: 30px;
`;

export const KindContents = styled.div`
  width: 60vw;
  padding: 0 10vw;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
`;
