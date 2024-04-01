import { createSlice } from "@reduxjs/toolkit";

const verificationDataSlice = createSlice({
  name: "verification-data",
  initialState: {
    verificationData: {
      phone: 0,
      code: "",
    },
  },
  reducers: {
    addPhone: (state, action) => {
      return {
        ...state,
        verificationData: {
          ...state.verificationData,
          phone: action.payload.phone,
        },
      };
    },
    addCode: (state, action) => {
      return {
        ...state,
        verificationData: {
          ...state.verificationData,
          code: action.payload.code,
        },
      };
    },
  },
});

export const { addPhone, addCode } = verificationDataSlice.actions;
export const verificationDataReducer = verificationDataSlice.reducer;
