import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IPosts } from "../../types";

interface InitialState {
  value: IPosts[];
}
const getFromLocalStorage = (): IPosts[] => {
  const data = localStorage.getItem("wishlistPosts");
  return data ? JSON.parse(data) : [];
};
const initialState: InitialState = {
  value: getFromLocalStorage(),
};

const saveToLocalStorage = (posts: IPosts[]) => {
  localStorage.setItem("wishlistPosts", JSON.stringify(posts));
};
export const postSlice = createSlice({
  name: "postWishlist",
  initialState,
  reducers: {
    togglePost: (state, action: PayloadAction<IPosts>) => {
      const isExist = state.value.some(
        (item) => item?.id === action.payload.id
      );
      if (isExist) {
        state.value = state.value.filter((i) => i.id !== action.payload.id);
      } else {
        state.value.push(action.payload);
      }
      saveToLocalStorage(state.value);
    },
  },
});
export const { togglePost } = postSlice.actions;
export default postSlice.reducer;
