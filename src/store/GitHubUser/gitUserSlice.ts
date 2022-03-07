import { createSlice } from "@reduxjs/toolkit";

export const gitSlice = createSlice({
  name: "gitUser",
  initialState: {
    name: "",
  },

  reducers: {
    changeUser(state, { payload }) {
      return { ...state, name: payload };
    },
  },
});

export const { changeUser } = gitSlice.actions;
export default gitSlice.reducer;