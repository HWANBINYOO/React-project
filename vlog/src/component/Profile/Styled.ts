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

export const ProfileImpormation = styled.div`
  width: 60%;
  height: 30vh;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 40px 0;
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

export const User = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto 0;
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

export const uploadBlogs = styled.div`
  width: 80%;
  height: 1500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  gap: 50px;
  padding: 40px 0;
  img {
    width: 350px;
  }
`;

export const Hr = styled.hr`
  width: 80%;
  margin: 0 auto;
`;
