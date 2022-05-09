import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Sign = styled.div`
  height: 3vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  padding-right: 5%;
`;

export const SignInUp = styled.div`
  font-size: 1.2rem;
`;

export const HeaderBottom = styled.div`
  height: 12vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #755139;
`;

export const Mainlogo = styled.h1`
  font-size: 2rem;
`;
export const InputBox = styled.h1`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: 90%;
  height: 80%;
  border-radius: 10px;
  background-color: #f2edd7;
  text-align: left;
  padding: 2px 4px;
`;

export const SearchImg = styled.img`
  height: 60%;
`;

export const ProfileImg = styled.img``;
