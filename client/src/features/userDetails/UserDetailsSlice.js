import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    data:[],
    status:IdleDeadline,
 }


export const userDetailSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
      setOtherDetails: (state, action) => {
        state.value = action.payload;
      },
    },
  });

export const { setOtherDetails } = userDetailSlice.actions;

export default userDetailSlice.reducer;
