import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { customAxios } from "../../Libs/CustomAxois";
import { ProfileType } from "../../types";
import Footer from "../Footer/Footer";
import * as S from "./Styled";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [profileEdit, SetProfileEdit] = useState();
  // {
  //   name: string;
  //   password: string;
  // }
  const [Name, setName] = useState("유환빈");
  const [PassWord, setPassWord] = useState("penguin1234!");
  const [imgurl, setImgurl] = useState("/img/profile.png");

  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState("/img/profile.png");
  const [preview, setPreview] = useState(null);
  const fileRef = useRef();

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

  const onClick = async () => {
    try {
      await customAxios.post("/blog/profile", {
        name: Name,
        Password: PassWord,
      });
    } catch (a: any) {
      console.log(a);
    }
  };

  const handleFileOnChange = (event: any) => {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onloadend = (e) => {
      setFile(file);
    };
    if (file) reader.readAsDataURL(file);
  };

  const onChangeImg = (e: any) => {};

  return (
    <>
      <S.Profile>
        <S.ProfileImgEdit>
          <S.ProfileImg>
            <img src={previewURL} />
          </S.ProfileImg>
          {/* <input
            id="imgFile"
            name="imgFile"
            type="file"
            accept="image/*"
            onChange={onChangeImg}
          /> */}
          <input id="file" type="file" onChange={handleFileOnChange} />
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
          <S.EditInput
            type="text"
            value={PassWord}
            placeholder={"PassWord"}
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
