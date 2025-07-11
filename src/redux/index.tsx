import { configureStore } from "@reduxjs/toolkit";
import posts from "./features/postSlice";
import comments from "./features/commentSlice";
import albums from "./features/albumSlice";
export const store = configureStore({
  reducer: {
    posts,
    comments,
    albums,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
