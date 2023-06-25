import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

// this slice is only for reference
export const loginResponse = createSlice({
  name: "loginResponse",
  initialState,
  reducers: {
    store: (state, action) => {
      state.value = action.payload;
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { store } = loginResponse.actions;
export default loginResponse.reducer;
