import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRegions = createAsyncThunk("main/region", async () => {
  const userLanguage = localStorage.getItem("lang");
  const response = await axios.get(
    import.meta.env.VITE_API_URL + "/main/region/",
    {
      headers: { "Accept-Language": userLanguage },
    },
  );
  return response.data;
});

export const locationSlice = createSlice({
  name: location,
  initialState: {
    results: [],
    status: "idle",
    error: null,
  },
  reducers: {
    switchLocation(state, action) {
      state.city = action.payload;
      localStorage.setItem("location", action.payload);
    },
  },
  extraReducers: (builder) =>
    builder.addCase(fetchRegions.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.results = action.payload;
    }),
});

export const selectLocation = (state) => state.location.results;
export const locationActions = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
