import styled from "styled-components";

export const HeaderRIght = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  position: fixed;
  top: 5vh;
  right: 25px;
`;

export const Profile = styled.div`
  text-align: center;
  width: 80px;
  height: 45px;
  img {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const LogoutButton = styled.button`
  font-family: "GangwonEduSaeeum_OTFMediumA";
  background-color: black;
  color: white;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;
