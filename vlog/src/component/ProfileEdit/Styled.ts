import styled from "styled-components";

export const Profile = styled.div`
  width: 100vw;
  height: 85vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ProfileImgEdit = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProfileImg = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 230px;
  }
`;

export const UserId = styled.div`
  color: gray;
  font-size: 45px;
`;

export const UserBlogs = styled.span`
  font-size: 35px;
`;

export const UserName = styled.span`
  font-size: 35px;
  font-weight: bold;
`;
