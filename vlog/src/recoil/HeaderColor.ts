import { atom } from "recoil";

export const BlogHeaderColor = atom<string>({
  key: "blogHeaderColor",
  default: "blue",
});
