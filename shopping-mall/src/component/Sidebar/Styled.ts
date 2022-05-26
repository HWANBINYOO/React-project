import styled from "styled-components";

type FontProps = {
  fontSize: string;
};

export const SidebarWapper = styled.div`
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  border: 1px solid black;
  padding-top: 50px;
`;

export const MainTitle = styled.div`
  width: 300px;
  height: 100px;
  font-size: 5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: bold;
  margin-left: 50px;
`;

export const SmallMenu = styled.div`
  width: 300px;
  height: 100px;
  font-size: ${(props: FontProps) => props.fontSize};
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: bold;
  margin-left: 50px;
`;
