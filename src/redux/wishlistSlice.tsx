import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface TextState {
  value: string;
}
const initialState: TextState = {
  value: "Salom",
};
export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    lang: (state, action: PayloadAction<string>) => {
        state.value = action.payload
    }
  }
});
export const {lang} = textSlice.actions
export default textSlice.reducer
