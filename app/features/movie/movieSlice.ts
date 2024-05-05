// reducers.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  searchMovies: [],
  selectedMovie: null,
  meta: {
    page: 1,
    pageCount: 10,
  },
};

const appSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSearchMovies(state, action) {
      state.searchMovies = action.payload;
    },
    setSelectedMovie(state, action) {
      state.selectedMovie = action.payload;
    },
    setMeta(state, action) {
      state.meta = action.payload;
    },
  },
});

export const {
  setSearchTerm,
  setSearchMovies,
  setSelectedMovie,
  setMeta,
} = appSlice.actions;
export default appSlice.reducer;
