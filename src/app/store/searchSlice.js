import { searchRequester } from "@/shared";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchResults = createAsyncThunk("search/searchResults", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const searchTerm = urlParams.get("q");

  if (searchTerm) {
    const response = await searchRequester({ query: searchTerm });
    return response;
  }
});
const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(searchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectSearchResults = (state) => state.search.data;

export const searchReducer = searchSlice.reducer;
