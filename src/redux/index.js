import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movie-slice";
import userSlice from "./user-slice";
import seriesList from "./series-slice";

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
    user: userSlice.reducer,
    series: seriesList.reducer,
  },
});
