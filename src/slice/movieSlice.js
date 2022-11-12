import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    allMovies: [],
    totalCount: undefined,
    searchTerm: undefined,
  },
  reducers: {
    addMovies: (state, action) => {
      console.log("act", action.payload);
      state.allMovies.push(...action.payload.Search);
      state.allMovies = action.payload.Search;
      state.totalCount = action.payload.totalResults;
    },
    addSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

// this is for dispatch
export const { addMovies, addSearchTerm } = movieSlice.actions;

// this is for configureStore
export default movieSlice.reducer;
