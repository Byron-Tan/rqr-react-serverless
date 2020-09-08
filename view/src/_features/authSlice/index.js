import { createSlice } from "@reduxjs/toolkit";
import { push } from "connected-react-router";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    loading: false,
  },
  reducers: {
    fetchUser: (state) => {
      const authToken = localStorage.getItem("AuthToken");
      if (authToken === null) {
        push("/login");
        return state;
      } else {
      }
    },
  },
});

export const { fetchUser } = authSlice.actions;

export default authSlice.reducer;
