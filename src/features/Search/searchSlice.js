import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    setSearchValue: (state, action) => action.payload,
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
