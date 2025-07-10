import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IComments } from "../../types";

interface InitialState {
  value: IComments[];
}

const getFromLocalStorage = (): IComments[] => {
  const data = localStorage.getItem("wishlistComments");
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (comments: IComments[]) => {
  localStorage.setItem("wishlistComments", JSON.stringify(comments));
};

const initialState: InitialState = {
  value: getFromLocalStorage(),
};

export const commentSlice = createSlice({
  name: "commentWishlist",
  initialState,
  reducers: {
    toggleComment: (state, action: PayloadAction<IComments>) => {
      const isExist = state.value.some((item) => item.id === action.payload.id);

      if (isExist) {
        state.value = state.value.filter((i) => i.id !== action.payload.id);
      } else {
        state.value.push(action.payload);
      }

      saveToLocalStorage(state.value);
    },
  },
});

export const { toggleComment } = commentSlice.actions;
export default commentSlice.reducer;
