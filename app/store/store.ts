import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";
import paginationReducer from "../features/pagination/paginationSlice";
// ...

export const store = configureStore({
  reducer: {
    userState: userReducer,
    movieState: movieReducer,
    paginationState: paginationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
