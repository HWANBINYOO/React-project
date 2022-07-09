import { atom } from "recoil";

export const boardFixState = atom<boolean>({
  key: "boardFixState",
  default: false,
});

export const boardFixidState = atom<number | string>({
  key: "boardFixidState",
  default: 0,
});
