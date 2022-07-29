import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
  name: "UI",
  initialState: {
    isLight: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isLight = !state.isLight;
    },
  },
});

export const UIActions = UISlice.actions;

export default UISlice;
