import { configureStore } from "@reduxjs/toolkit";
import { langReducer } from "./langSlice";
import { locationReducer } from "./locationSlice";
import { verificationDataReducer } from "./verificationDataSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    language: langReducer,
    verificationData: verificationDataReducer,
  },
});
