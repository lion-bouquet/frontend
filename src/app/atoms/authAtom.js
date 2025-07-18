import { atom } from "jotai";

export const authAtom = atom({
  accessToken: null,
  refreshToken: null,
});
