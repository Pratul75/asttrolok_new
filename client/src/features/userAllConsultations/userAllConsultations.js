import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    data:[],
 }


export const userAllConsultationsSlice = createSlice({
    name: "userConsultations",
    initialState,
    reducers: {
      UserConsultations: (state, action) => {
        state.data = action.payload;
      },

    },
  });

export const {  UserConsultations } = userAllConsultationsSlice.actions;

export default userAllConsultationsSlice.reducer;
