import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filter.value;

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
