import { atom } from "recoil";

interface headerColor {
  color: string;
}

export const HeaderColor = atom<headerColor[]>({
  key: "myblogHeaderColor",
  default: [
    {
      color: "blue",
    },
    {
      color: "purple",
    },
    {
      color: "Orange",
    },
    {
      color: "red",
    },
  ],
});
