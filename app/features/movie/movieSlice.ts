// reducers.js
import { Props } from "@/app/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  searchMovies: [],
  selectedMovie: null as Props | null,
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
      console.log(state.selectedMovie)
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
