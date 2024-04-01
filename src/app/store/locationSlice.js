import { createSlice } from "@reduxjs/toolkit";

// const initialState = { city: 'Bishkek' }

export const locationSlice = createSlice({
  name: location,
  initialState: { city: "" },
  reducers: {
    switchLocation(state, action) {
      state.city = action.payload;
      localStorage.setItem("location", action.payload);
    },
  },
});

export const selectCity = (state) => state.location.city;
export const locationActions = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
