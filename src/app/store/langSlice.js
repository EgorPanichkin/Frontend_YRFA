import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("lang")
  ? { currentLang: localStorage.getItem("lang") }
  : { currentLang: "ru" };

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    switchLanguage(state, action) {
      state.currentLang = action.payload;
      localStorage.setItem("lang", action.payload);
    },
  },
});

export const langAction = langSlice.actions;
export const langReducer = langSlice.reducer;
