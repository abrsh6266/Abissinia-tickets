import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  page: number;
  pageCount: number;
  // Add other pagination-related properties as needed
}

const initialState: PaginationState = {
  page: 1,
  pageCount: 2,
  // Initialize other properties here
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setPageCount(state, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    // Add other reducers for additional pagination-related properties
  },
});

export const { setPage, setPageCount } = paginationSlice.actions;

export default paginationSlice.reducer;
