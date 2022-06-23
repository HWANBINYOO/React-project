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
  profile: (user_id: number | string) => {
    return `/user_profile/${user_id}`;
  },
  // 내 게시글 조회
  myBoards: (user_id: number | string) => {
    return `/boards/${user_id}`;
  },

  // 내 프로필 이미지
  profileImg: (user_id: number | string) => {
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

  //게시글 추가
  addBoard: () => {
    return `/board/write`;
  },

  //게시글 삭제
  deleteBoard: (board_id: number | string) => {
    return `/delete/${board_id}`;
  },

  // 블로그 이미지 조회
  boardImg: (board_id: number | string) => {
    return `/board_image/${board_id}`;
  },
};
