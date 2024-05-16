// reducers.js
import { SnackAndDrink } from "@/app/data";
import { Props } from "@/app/utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface ExtraItem {
  snackAndDrink: SnackAndDrink | undefined;
  amount: number;
}
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
      console.log(state.selectedMovie);
    },
    setExtras(state, action) {
      const newExtra = action.payload.selectedExtras;
    
      if (state.selectedMovie) {
        if (state.selectedMovie.extras) {
          const existingExtraIndex = state.selectedMovie.extras.findIndex(
            (extra) => extra.snackAndDrink?.id === newExtra.snackAndDrink.id
          );
    
          if (existingExtraIndex !== -1) {
            state.selectedMovie.extras.splice(existingExtraIndex, 1, newExtra);
          } else {
            state.selectedMovie.extras.push(newExtra);
          }
        } else {
          state.selectedMovie.extras = [newExtra];
        }
      }
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
  setExtras,
} = appSlice.actions;
export default appSlice.reducer;
