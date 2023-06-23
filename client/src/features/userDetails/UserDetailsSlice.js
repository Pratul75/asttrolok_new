import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    data:[],
 }


export const userDetailSlice = createSlice({
    name: "userDetails",
    initialState,
    reducers: {
      setOtherDetails: (state, action) => {
        state.data = action.payload;
      },
    
    },
  });

export const { setOtherDetails } = userDetailSlice.actions;

export default userDetailSlice.reducer;
