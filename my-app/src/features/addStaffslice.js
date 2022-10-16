import { createSlice } from "@reduxjs/toolkit";
import { STAFFS } from "../shared/staffs";
export const staffSlice = createSlice({
  name: "addStaff",
  initialState: {
    listStaff: STAFFS,
    search: [],
  },
  reducers: {
    addStaff: (state, action) => {
      state.listStaff = state.listStaff.concat(action.payload);
    },
    searchStaff: (state, action) => {
      // state.search = ...
    },
  },
});
export const staffAction = staffSlice.actions;
export default staffSlice.reducer;
