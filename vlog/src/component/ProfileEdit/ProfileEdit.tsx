import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { customAxios } from "../../Libs/CustomAxois";
import { toast } from "react-toastify";
import * as S from "./Styled";
import {
  myProfileImgReqeuset,
  profileimgUpdateReqeuset,
  profileUpdageReqeuset,
} from "../../Api/member";
import { MemberController } from "../../Libs/url";

const ProfileEdit = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [OriginName, setOriginName] = useState("");
  const [userId, setUserId] = useState("");
  const [PassWord, setPassWord] = useState("");
  const [ChangePassWord, setChangePassWord] = useState("");
  const [PassWordAgain, setPassWordAgain] = useState("");
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [file, setFile] = useState(""); //파일
  const [imgurl, setimgurl] = useState(""); //url
  const [modalDisplay, setmodalDisplay] = useState(false);

  useEffect(() => {
    async function Getprofile() {
      const { data } = await customAxios.get("user_name");
      setOriginName(data.name);
      setName(data.name);
      setUserId(data.user_id);
      const res = await myProfileImgReqeuset(data.user_id);
      setimgurl(res?.data);
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
    setmodalDisplay(true);
  };
  //수정사항 서버로보내기 (profile사진)
  const onClickImg = async (event: any) => {
    event.preventDefault();
    setmodalDisplay(false);
    await profileimgUpdateReqeuset(file);
  };
  const onClick = async (event: any) => {
    event.preventDefault();
    try {
      if (PassWord != "" && ChangePassWord == "" && PassWordAgain == "") {
        return toast.warning("새로운패스워드를 입력하지 않았어요!");
      } else if (
        PassWord != "" &&
        ChangePassWord != "" &&
        PassWordAgain == ""
      ) {
        return toast.warning("패스워드재입력을 입력하지 않았어요!");
      } else if (PassWordAgain != ChangePassWord) {
        return toast.warning("새로운패스워드기 일치하지 않아요!");
      }
      await customAxios.patch(MemberController.updateProfile(), {
        name: Name,
        password: PassWord,
        newPassword: PassWordAgain,
      });
      toast.success("수정되었습니다!");
      setTimeout(() => {
        navigate(`/profile/${userId}`);
      }, 500);
    } catch (e: any) {
      const { data } = e.response;
      console.error("data : ", data);
      toast.error(data.message);
    }
  };

  return (
    <>
      <S.Profile>
        {modalDisplay ? (
          <S.Modal>
            <S.ModalContainal>
              {imgurl || imgBase64 ? (
                imgBase64 ? (
                  <img src={imgBase64} />
                ) : (
                  <img src={imgurl} />
                )
              ) : (
                <img
                  src={
                    "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/profile.png"
                  }
                />
              )}
              <button
                style={{ backgroundColor: " rgb(255, 157, 149)" }}
                onClick={onClickImg}
              >
                변경하기
              </button>
            </S.ModalContainal>
          </S.Modal>
        ) : null}

        <S.ProfileImgEdit>
          <S.ProfileImg>
            {imgurl || imgBase64 ? (
              imgBase64 ? (
                <img src={imgBase64} />
              ) : (
                <img src={imgurl} />
              )
            ) : (
              <img
                src={
                  "https://devlogfront.s3.ap-northeast-2.amazonaws.com/Img/profile.png"
                }
              />
            )}
          </S.ProfileImg>
          <form name="files" method="patch" onSubmit={onClickImg}>
            <input
              id="change_img"
              type="file"
              style={{ display: "none" }}
              onChange={handleChangeFile}
            />
            <label htmlFor="change_img">선택</label>
          </form>
        </S.ProfileImgEdit>
        <S.EditI method="patch">
          <span>name:</span>
          <S.EditInput
            type="text"
            value={Name}
            placeholder={"Name"}
            onChange={(e: any) => {
              setName(e.target.value);
            }}
          />
        </S.EditI>
        <S.EditI method="patch">
          <span>현재 비밀번호 :</span>
          <S.EditInputPW
            type="password"
            placeholder={"pwd"}
            onChange={(e: any) => setPassWord(e.target.value)}
          />
        </S.EditI>
        <S.EditI method="patch">
          <span>새로운 비밀번호 :</span>
          <S.EditInputPW
            type="password"
            placeholder={"pwd"}
            onChange={(e: any) => setChangePassWord(e.target.value)}
          />
        </S.EditI>
        <S.EditI method="patch">
          <span>새로운 비밀번호 재입력 :</span>
          <S.EditInputPW
            type="password"
            placeholder={"pwd"}
            onChange={(e: any) => setPassWordAgain(e.target.value)}
          />
        </S.EditI>
        <S.ButtonS>
          <S.Btn
            onClick={() => navigate(`/profile/${userId}`)}
            color={"#ffbeb7"}
          >
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
