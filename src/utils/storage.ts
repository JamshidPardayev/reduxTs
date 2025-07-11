import type { ITodos } from "../types";

const WISHLIST_KEY = "wishlist_todos";

export const getWishlist = (): ITodos[] => {
  const data = localStorage.getItem(WISHLIST_KEY);
  return data ? JSON.parse(data) : [];
};

export const setWishlist = (items: ITodos[]) => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(items));
};

export const toggleWishlist = (todo: ITodos): ITodos[] => {
  const list = getWishlist();
  const exists = list.find((item) => item.id === todo.id);
  let newList;

  if (exists) {
    newList = list.filter((item) => item.id !== todo.id);
  } else {
    newList = [...list, todo];
  }

  setWishlist(newList);
  return newList;
};

export const isInWishlist = (id: number): boolean => {
  const list = getWishlist();
  return list.some((todo) => todo.id === id);
};
