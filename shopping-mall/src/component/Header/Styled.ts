import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: white;
`;
export const HeaderBottom = styled.div`
  height: 10vh;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
export const HeaderRight = styled.div`
  width: 400px;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginButton = styled.button`
  font-family: "EarlyFontDiary";
  height: 3.5vh;
  width: 150px;
  border: none;
  border-radius: 10px;
  background-color: black;
  color: white;
  font-size: 0.8rem;
`;

export const CircleImg = styled.img`
  height: 40%;
`;
export const Mainlogo = styled.img`
  padding-left: 12vw;
  height: 30%;
`;

export const HeaderLogos = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 25px;
  height: 60%;
`;
