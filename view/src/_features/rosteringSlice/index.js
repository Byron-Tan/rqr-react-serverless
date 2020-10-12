import { createSlice } from "@reduxjs/toolkit";

export const rosteringSlice = createSlice({
  name: "rostering",
  initialState: {},
  reducers: {
    placeholder: (state, action) => {
      // placeholder
      console.log(state, action);
    },
  },
});

export const { placeholder } = rosteringSlice.actions;

//ASYNC ACTIONS

//bleh

export default rosteringSlice.reducer;
