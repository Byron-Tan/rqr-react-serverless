import { createSlice } from "@reduxjs/toolkit";

export const applicantsSlice = createSlice({
  name: "applicants",
  initialState: {
    loading: false,
    tableHead: [],
    tableData: [],
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    setApplicants: (state, action) => {
      // state.tableHead = action.payload.tableHead,
      // state.tableData = action.payload.tableData,
      console.log("from set applicants");
      state.loading = false;
    },
  },
});

export const { loading, setApplicants } = applicantsSlice.actions;

// ACYNC actions
export const fetchAllApplicants = (credentials) => async (dispatch) => {
  dispatch(loading());
  // TODO: Write some sort of function to fetch all user defatils if role = 1
  // TODO : Within axios get function include dispatch(setApplicants)
  dispatch(setApplicants());
  // TODO: Write some error handler
};

export default applicantsSlice.reducer;
