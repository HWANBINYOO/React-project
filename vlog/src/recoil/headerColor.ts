import { atom } from "recoil";

export interface headerColor {
  default: string;
}

export const BlogHeaderColor = atom({
  key: "myblogHeaderColor",
  default: "blue",
});
