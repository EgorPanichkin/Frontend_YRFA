import { configureStore } from "@reduxjs/toolkit";
import { langReducer } from "./langSlice";
import { locationReducer } from "./locationSlice";
import { verificationDataReducer } from "./verificationDataSlice";
import { searchReducer } from "./searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    location: locationReducer,
    language: langReducer,
    verificationData: verificationDataReducer,
  },
});
