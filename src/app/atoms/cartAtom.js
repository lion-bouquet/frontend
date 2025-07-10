import { atom } from "jotai";

export const cartItemCountAtom = atom(0);

export const cartItemsAtom = atom([]); // [{ slug, name, image, count }]
