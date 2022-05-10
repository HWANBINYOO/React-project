import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Sign = styled.div`
  font-family: "Inika", serif;
  height: 3vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 20px;
  padding-right: 3%;
  color: #755139;
`;

export const SignInUp = styled.div`
  font-size: 1.1rem;
`;

export const HeaderBottom = styled.div`
  height: 12vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #755139;
`;

export const Mainlogo = styled.div`
  font-family: "Inika", serif;
  font-size: 2.5rem;
  font-weight: 100;
  color: #f2edd7;
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
  width: 80%;
  height: 80%;
  border-radius: 10px;
  background-color: #f2edd7;
  text-align: left;
  padding-left: 20px;
  outline: none;
  border: none;
  font-size: 1.5rem;
  color: #755139;

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const SearchImg = styled.img`
  height: 60%;
`;
export const HeaderLogos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 6%;
`;

export const ProfileImg = styled.img`
  height: 60%;
`;
