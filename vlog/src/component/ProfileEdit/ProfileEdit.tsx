import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { customAxios } from "../../Libs/CustomAxois";
import { ProfileType } from "../../types";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";
import * as S from "./Styled";
import axios from "axios";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [profileEdit, SetProfileEdit] = useState();
  const [Name, setName] = useState("유환빈");
  const [PassWord, setPassWord] = useState("");
  const [ChangePassWord, setChangePassWord] = useState("");
  const [PassWordAgain, setPassWordAgain] = useState("");
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [file, setFile] = useState(""); //파일
  const [userId, setUserId] = useState();
  useEffect(() => {
    async function Getprofile() {
      try {
        const { data } = await customAxios.get("/blog/profile/edite");
        setName(data.user_name);
        setFile(data.img_url);
      } catch (a: any) {
        console.log(a);
      }
    }
    Getprofile();
  }, []);

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

  //수정사항 서버로보내기 (profile사진포함)
  const onClick = async (event: any) => {
    if (ChangePassWord === "") {
      return toast.warning("새로운패스워드를 입력하지 않았어요!");
    } else if (PassWordAgain === "") {
      return toast.warning("새로운패스워드재입력를 입력하지 않았어요!");
    } else if (PassWordAgain !== ChangePassWord) {
      return toast.warning("새로운패스워드가 일치하지 않아요!");
    }
    event.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    formData.append("name", "재");
    formData.append("password", "12345");
    formData.append("newPassword", "123456");
    try {
      await axios({
        method: "patch",
        url: "http://10.120.74.59:3000/1/update",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // const res = await customAxios.patch("/1/update", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      toast.success("수정되었습니다!");
      navigate("/profile");
    } catch (e: any) {
      console.log(e);
      if (e.response) {
        const { data } = e.response;
        console.error("data : ", data);
        toast.error(data.message);
      }
    }
  };

  return (
    <>
      <S.Profile>
        <S.ProfileImgEdit>
          <S.ProfileImg>
            {file ? <img src={imgBase64} /> : <img src={"/img/profile.png"} />}
          </S.ProfileImg>
          <form name="files" method="patch" onSubmit={onClick}>
            <input
              id="change_img"
              type="file"
              style={{ display: "none" }}
              onChange={handleChangeFile}
            />
            <label htmlFor="change_img">변경</label>
            {/* <button type="submit">제출하기</button> */}
          </form>
        </S.ProfileImgEdit>
        <S.EditI method="patch">
          <span>name:</span>
          <S.EditInput
            type="text"
            value={Name}
            placeholder={"Name"}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </S.EditI>
        <S.EditI method="patch">
          <span>현재 비밀번호 :</span>
          <S.EditInputPW
            type="password"
            placeholder={"pwd"}
            onChange={(e) => setPassWord(e.target.value)}
          />
        </S.EditI>
        <S.EditI method="patch">
          <span>새로운 비밀번호 :</span>
          <S.EditInputPW
            type="password"
            placeholder={"pwd"}
            onChange={(e) => setChangePassWord(e.target.value)}
          />
        </S.EditI>
        <S.EditI method="patch">
          <span>새로운 비밀번호 재입력 :</span>
          <S.EditInputPW
            type="password"
            placeholder={"pwd"}
            onChange={(e) => setPassWordAgain(e.target.value)}
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
