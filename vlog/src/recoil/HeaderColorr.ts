import { atom } from "recoil";

export const BlogHeaderColor = atom<string>({
  key: "myblogHeaderColor",
  default: "blue",
});
