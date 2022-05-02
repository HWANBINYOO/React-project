import styled from "styled-components";

export const Profile = styled.div`
  width: 30%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0 15%;
  border: 2px solid gray;
  border-radius: 10px;
`;

export const ProfileImgEdit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  padding: 30px 0;
  label {
    font-family: "GangwonEduSaeeum_OTFMediumA";
    font-size: 50px;
    background-color: white;
    border: none;
    color: black;
    cursor: pointer;
    transition: all ease 0.2s 0s;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    transition: all ease 0.2s 0s;
    width: 150px;
    &:hover {
      opacity: 0.5;
    }
  }
`;

export const EditI = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  font-size: 35px;
  padding-right: 10%;
  margin: 20px 0;
`;

export const EditInput = styled.input`
  font-family: "GangwonEduSaeeum_OTFMediumA";
  color: gray;
  font-size: 35px;
  border: none;
  outline: none;
  text-align: end;
`;

export const ButtonS = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px 0;
`;
export const Btn = styled.button`
  font-family: "GangwonEduSaeeum_OTFMediumA";
  background-color: ${(props: any) => props.color};
  width: 170px;
  height: 45px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding-top: 10px;
`;
