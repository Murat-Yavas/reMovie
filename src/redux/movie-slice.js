import { createSlice } from "@reduxjs/toolkit";

const initialMovieState = {
  nowPlayingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  movieList: [],
  allMovies: [],
  isHomeLoading: false,
  isHomeError: false,
  isMovieListLoading: false,
  isMovieListError: false,
  isAllMoviesLoading: false,
  isAllMoviesError: false,
};
const movieSlice = createSlice({
  name: "movie",
  initialState: initialMovieState,
  reducers: {
    getNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPopular: (state, action) => {
      state.popularMovies = action.payload;
    },
    getTopRated: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getMovieList: (state, action) => {
      state.movieList = action.payload;
    },
    getAllMovies: (state, action) => {
      state.allMovies = action.payload;
    },
    toggleHomeLoading: (state, action) => {
      state.isHomeLoading = action.payload;
    },
    toggleHomeError: (state, action) => {
      state.isHomeError = action.payload;
    },
    toggleMovieListLoading: (state, action) => {
      state.isMovieListLoading = action.payload;
    },
    toggleMovieListError: (state, action) => {
      state.isMovieListError = action.payload;
    },
    toggleAllMoviesLoading: (state, action) => {
      state.isAllMoviesLoading = action.payload;
    },
    toggleAllMoviesError: (state, action) => {
      state.isAllMoviesError = action.payload;
    },
  },
});

export const movieActions = movieSlice.actions;
export default movieSlice;
