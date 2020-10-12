import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "../_features/authSlice";
import applicantReducer from "../_features/applicantsSlice";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    user: authReducer,
    applicants: applicantReducer,
  });
