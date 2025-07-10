import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IAlbums } from "../../types";

interface InitialState {
  value: IAlbums[];
}
const getFromLocalStorage = (): IAlbums[] => {
  const data = localStorage.getItem("wishlistAlbums");
  return data ? JSON.parse(data) : [];
};

const initialState: InitialState = {
  value: getFromLocalStorage(),
};

const saveToLocalStorage = (albums: IAlbums[]) => {
  localStorage.setItem("wishlistAlbums", JSON.stringify(albums));
};

export const albumSlice = createSlice({
  name: "albumWishlist",
  initialState,
  reducers: {
    toggleAlbum: (state, action: PayloadAction<IAlbums>) => {
      const isExist = state.value.some((i) => i.id === action.payload.id);
      if (isExist) {
        state.value = state.value.filter((i) => i.id !== action.payload.id);
      } else {
        state.value.push(action.payload);
      }
      saveToLocalStorage(state.value);
    },
  },
});

export const { toggleAlbum } = albumSlice.actions;
export default albumSlice.reducer;
