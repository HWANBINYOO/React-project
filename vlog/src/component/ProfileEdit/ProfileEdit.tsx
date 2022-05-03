import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { customAxios } from "../../Libs/CustomAxois";
import { ProfileType } from "../../types";
import Footer from "../Footer/Footer";
import * as S from "./Styled";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [profileEdit, SetProfileEdit] = useState();
  // {
  //   name: string;
  //   password: string;
  // }
  const [Name, setName] = useState("유환빈");
  const [PassWord, setPassWord] = useState("penguin1234!");
  const [imgurl, setImgurl] = useState("/img/profile.png");
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(""); //파일

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };
  const onChangePassWord = (e: any) => {
    setPassWord(e.target.value);
  };

  useEffect(() => {
    async function Getprofile() {
      try {
        SetProfileEdit(await customAxios.get("/blog/profile/Edit"));
      } catch (a: any) {
        console.log(a);
      }
    }
    Getprofile();
  }, []);

  const handleChangeFile = (event: any) => {
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
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  //수정사항 서버로보내기 (profile사진포함)
  const onClick = async () => {
    const formData = new FormData();
    formData.append("file", imgFile);
    // formData.append("name", Name);
    // formData.append("passWord", PassWord);
    try {
      await customAxios.post("/user/upload", {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: {
          formData,
        },
      });
    } catch (a: any) {
      console.log(a);
    }
  };

  return (
    <>
      <S.Profile>
        <S.ProfileImgEdit>
          <S.ProfileImg>
            {imgFile ? (
              <img src={imgBase64} />
            ) : (
              <img src={"/img/profile.png"} />
            )}
          </S.ProfileImg>
          <input
            id="change_img"
            type="file"
            style={{ display: "none" }}
            onChange={handleChangeFile}
          />
          <label htmlFor="change_img">변경</label>
        </S.ProfileImgEdit>
        <S.EditI>
          <span>name:</span>
          <S.EditInput
            type="text"
            value={Name}
            placeholder={"Name"}
            onChange={onChangeName}
          />
        </S.EditI>
        <S.EditI>
          <span>PassWord :</span>
          <S.EditInput type="text" placeholder={""} />
        </S.EditI>
        <S.EditI>
          <span>New PassWord :</span>
          <S.EditInput
            type="text"
            placeholder={""}
            onChange={onChangePassWord}
          />
        </S.EditI>
        <S.ButtonS>
          <S.Btn onClick={() => navigate("/profile")} color={"#ffbeb7"}>
            취소
          </S.Btn>
          <S.Btn onClick={onClick} color={"#c9bffc"}>
            확인
          </S.Btn>
        </S.ButtonS>
      </S.Profile>
    </>
  );
};

export default ProfileEdit;
