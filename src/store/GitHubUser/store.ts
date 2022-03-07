import { configureStore } from "@reduxjs/toolkit";

import gitReducer from "./gitUserSlice";

export default configureStore({
  reducer: {
    gitUser: gitReducer,
  },
});
