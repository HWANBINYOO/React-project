export const MemberController = {
  //로그인
  signin: () => {
    return "user/login";
  },
  // 회원 가입
  signup: () => {
    return "user/register";
  },

  // 프로필창 정보 조회
  profile: (user_id: string) => {
    return `/user_profile/${user_id}`;
  },
  // 내 게시글 조회
  myBoards: (user_id: string) => {
    return `/boards/${user_id}`;
  },

  // 내 프로필 이미지
  profileImg: (user_id: string) => {
    return `user_image/${user_id}`;
  },

  //프로필 이미지 변경
  updateProfileimg: () => {
    return `/user/update/image`;
  },

  //프로필 정보 변경
  updateProfile: () => {
    return `/user/update`;
  },
};

export const boardController = {
  //전체 게시글 조회
  boards: () => {
    return `board`;
  },

  addBoard: () => {
    return `/board/write`;
  },

  deleteBoard: (board_Id: string) => {
    return `/delete/${board_Id}`;
  },
};
