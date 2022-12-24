import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import QuyStaff from "./features/addStaffslice";
import department from "./features/departmentSlicer";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    Staff: QuyStaff,
    depts: department
  },
  middleware: getDefaultMiddleware().concat(logger),
});
