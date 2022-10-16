import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import QuyStaff from "./features/addStaffslice";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    Staff: QuyStaff,
  },
  middleware: getDefaultMiddleware().concat(logger),
});
