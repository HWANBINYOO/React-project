/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../Libs/CustomAxois";
import * as S from "./Styled";

const Profile = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState("유환빈");
  const [PassWord, setPassWord] = useState("");
  const [ChangePassWord, setChangePassWord] = useState("");
  const [Email, setEmail] = useState("");
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [file, setFile] = useState(""); //파일

  const onClick = async (event: any) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    formData.append("name", Name);
    formData.append("password", PassWord);
    formData.append("newPassword", ChangePassWord);
    try {
      await customAxios.patch("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/profile");
    } catch (e: any) {
      console.log(e);
      if (e.response) {
        const { data } = e.response;
        console.error("data : ", data);
      }
    }
  };

  const handleChangeFile = (event: any) => {
    event.preventDefault();
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setFile(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  return (
    <>
      <S.Postionner>
        <S.ContentWapper>
          <S.ProfileImg>
            {file ? (
              imgBase64 ? (
                <img src={imgBase64} />
              ) : (
                <img src={file} />
              )
            ) : (
              <img src={"/img/Profile.png"} />
            )}
          </S.ProfileImg>
          <form name="files" method="patch" onSubmit={onClick}>
            <input
              id="change_img"
              type="file"
              style={{ display: "none" }}
              onChange={handleChangeFile}
            />
            <label htmlFor="change_img">
              <img src={"/img/Poto.png"} />
            </label>
            {/* <button type="submit">제출하기</button> */}
          </form>
          <S.InputsWapper>
            <S.InputBox>
              <S.InutTitle>이름</S.InutTitle>
              <S.Input
                type="text"
                placeholder={"Name"}
                value={Name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </S.InputBox>
            <S.InputBox>
              <S.InutTitle>비밀번호</S.InutTitle>
              <S.Input
                type="password"
                placeholder={"pwd"}
                onChange={(e) => setPassWord(e.target.value)}
              />
            </S.InputBox>
            <S.InputBox>
              <S.InutTitle>이메일</S.InutTitle>
              <S.Input
                type="text"
                placeholder={"Email"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </S.InputBox>
            <S.InputBox>
              <S.InutTitle>비밀번호 변경</S.InutTitle>
              <S.Input
                type="password"
                placeholder={"pwd"}
                onChange={(e) => setChangePassWord(e.target.value)}
              />
            </S.InputBox>
          </S.InputsWapper>
          <S.BtnWapper>
            <S.Btn backColor="white" onClick={(e) => navigate("/")}>
              취소
            </S.Btn>
            <S.Btn backColor="#6284D9" onClick={onClick}>
              수정
            </S.Btn>
          </S.BtnWapper>
        </S.ContentWapper>
      </S.Postionner>
    </>
  );
};

export default Profile;
