
import type { IUsers } from "../types";

const USER_WISHLIST_KEY = "wishlist_users";

export const getUserWishlist = (): IUsers[] => {
  const data = localStorage.getItem(USER_WISHLIST_KEY);
  return data ? JSON.parse(data) : [];
};

export const setUserWishlist = (items: IUsers[]) => {
  localStorage.setItem(USER_WISHLIST_KEY, JSON.stringify(items));
};

export const toggleUserWishlist = (user: IUsers): IUsers[] => {
  const list = getUserWishlist();
  const exists = list.find((item) => item.id === user.id);
  let newList;

  if (exists) {
    newList = list.filter((item) => item.id !== user.id);
  } else {
    newList = [...list, user];
  }

  setUserWishlist(newList);
  return newList;
};

export const isUserLiked = (id: number): boolean => {
  const list = getUserWishlist();
  return list.some((user) => user.id === id);
};
