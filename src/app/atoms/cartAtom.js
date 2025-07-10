import { atomWithStorage } from "jotai/utils";

export const cartItemCountAtom = atomWithStorage("cart-item-count", 0);
export const cartItemsAtom = atomWithStorage("cart-items", []);
export const cartTotalAtom = atomWithStorage("cart-total", 0);
