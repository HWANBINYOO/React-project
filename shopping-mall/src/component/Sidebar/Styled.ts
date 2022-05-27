import styled from "styled-components";

type FontProps = {
  fontSize: string;
};
type ImgUrl = {
  url: string;
};

export const SidebarWapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background: url(${(props: ImgUrl) => props.url});
  background-size: cover;
  /* background-color: rgba(255, 255, 255, 0.4); */
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
`;

export const White = styled.div`
  padding-top: 50px;
  height: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 100;
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
  cursor: pointer;
  transition: all ease 0.2s 0s;
`;
