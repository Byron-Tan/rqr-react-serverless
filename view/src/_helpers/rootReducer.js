import { combineReducers } from "redux";
import authReducer from "../_features/authSlice/index";
import { connectRouter } from "connected-react-router";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
  });
