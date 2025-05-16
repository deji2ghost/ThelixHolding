import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
    itemsPerPage: 9,
  },
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetPage: (state) => {
      state.currentPage = 1;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
  },
});

export const { setPage, resetPage, setItemsPerPage } = paginationSlice.actions;
export default paginationSlice.reducer;
