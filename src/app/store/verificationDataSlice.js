import { createSlice } from "@reduxjs/toolkit";

const verificationDataSlice = createSlice({
  name: "verification-data",
  initialState: {
    verificationData: {
      phone: 0,
      code: "",
      registerPhone: 0,
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
    addPhoneRegister: (state, action) => {
      return {
        ...state,
        verificationData: {
          ...state.verificationData,
          registerPhone: action.payload.phoneNum,
        },
      };
    },
  },
});

export const { addPhone, addCode, addPhoneRegister } =
  verificationDataSlice.actions;
export const verificationDataReducer = verificationDataSlice.reducer;
