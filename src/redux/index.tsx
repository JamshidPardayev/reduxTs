import { configureStore } from "@reduxjs/toolkit";
// import wishlist from "./features/"
export const store = configureStore({
  reducer: {
// wishlist
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
