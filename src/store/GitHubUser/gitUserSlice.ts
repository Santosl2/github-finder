import { createSlice } from "@reduxjs/toolkit";

export const gitSlice = createSlice({
  name: "gitUser",
  initialState: {
    name: "Santosl2",
    page: 1,
    perPage: 6,
  },

  reducers: {
    changeUser(state, { payload }) {
      return { ...state, name: payload, page: 0, perPage: 6 };
    },
    changePage(state, { payload }) {
      return { ...state, page: payload.page, perPage: payload.perPage };
    },
  },
});

export const { changeUser, changePage } = gitSlice.actions;

export default gitSlice.reducer;
