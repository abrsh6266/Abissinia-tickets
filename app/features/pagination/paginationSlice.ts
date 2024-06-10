import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  page: number;
  pageCount: number;
}

const initialState: PaginationState = {
  page: 1,
  pageCount: 1,
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
  },
});

export const { setPage, setPageCount } = paginationSlice.actions;

export default paginationSlice.reducer;
