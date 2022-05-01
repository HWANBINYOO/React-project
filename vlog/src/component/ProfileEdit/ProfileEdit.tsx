import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { customAxios } from "../../Libs/CustomAxois";
import { ProfileType } from "../../types";
import Footer from "../Footer/Footer";
import * as S from "./Styled";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [profileEdit, SetProfileEdit] = useState<ProfileType>();
  // {
  //   name: string;
  //   postNumber: number;
  //   email: string;
  //   blogImgs: string;
  // }
  const [Name, setName] = useState("유환빈");
  const [PassWord, setPassWord] = useState("penguin1234!");

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
  return (
    <>
      <S.Profile>
        <S.ProfileImgEdit>
          <S.ProfileImg>
            <img src={"/img/profile.png"} />
          </S.ProfileImg>
          <button>변경</button>
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
          <S.Btn color={"#c9bffc"}>확인</S.Btn>
        </S.ButtonS>
      </S.Profile>
    </>
  );
};

export default ProfileEdit;
