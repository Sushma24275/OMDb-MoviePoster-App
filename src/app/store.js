import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../slice/movieSlice";

// this is for configureStore
export default configureStore({
  reducer: {
    movies: movieReducer,
  },
});
