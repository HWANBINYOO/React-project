import styled from "styled-components";

export const HeaderRIght = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
  position: fixed;
  top: 30px;
  right: 25px;
`;

export const Profile = styled.div`
  text-align: center;
  width: 50px;
  height: 30px;
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const LogoutButton = styled.button`
  font-family: "GangwonEduSaeeum_OTFMediumA";
  background-color: black;
  color: white;
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
`;
