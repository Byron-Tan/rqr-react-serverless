import { createSlice } from "@reduxjs/toolkit";
import { push } from "connected-react-router";
import instance from "api/instance";

export const authSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    errors: [],
    loggedIn: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.user.profilePic = action.payload.imageUrl;
      state.errors = [];
    },
    signUpSuccess: (state, action) => {
      state.user = action.payload;
      state.user.role = 1;
      state.user.profileComplete = "false";
      state.errors = [];
    },
    signUpFailure: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    loginFailure: (state, action) => {
      state.errors = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("AuthToken");
      state.user = null;
      push("/login");
    },
    profileComplete: (state) => {
      state.user.profileComplete = "true";
    },
  },
});

export const {
  signUpSuccess,
  signUpFailure,
  loginSuccess,
  loginFailure,
  logout,
  profileComplete,
} = authSlice.actions;

//ASYNC Actions
export const login = (credentials) => async (dispatch) => {
  instance
    .post("/login", credentials)
    .then((response) => {
      const authToken = `Bearer ${response.data.token}`;
      localStorage.setItem("AuthToken", authToken);
    })
    .then(() => {
      const authToken = localStorage.getItem("AuthToken");
      instance.defaults.headers.common = {
        Authorization: authToken,
      };
      instance
        .get("user")
        .then((response) => {
          dispatch(loginSuccess(response.data));
          dispatch(push("/"));
        })
        .catch((error) => {
          dispatch(loginFailure(error.response.data));
        });
    })
    .catch((error) => {
      dispatch(loginFailure(error.response.data));
    });
};

export const signUp = (newUserData) => async (dispatch) => {
  instance
    .post("/signup", newUserData)
    .then((response) => {
      localStorage.setItem("AuthToken", `Bearer ${response.data.token}`);
      dispatch(signUpSuccess(newUserData));
      dispatch(push("/"));
    })
    .catch((error) => {
      dispatch(signUpFailure(error.response.data));
    });
};

export default authSlice.reducer;
