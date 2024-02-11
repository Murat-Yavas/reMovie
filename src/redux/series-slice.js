import { createSlice } from "@reduxjs/toolkit";

const initialSeriesState = {
  seriesList: [],
  allSeries: [],
  isSeriesListLoading: false,
  isSeriesListError: false,
  isAllSeriesLoading: false,
  isAllSeriesError: false,
};
const seriesList = createSlice({
  name: "series",
  initialState: initialSeriesState,
  reducers: {
    getSeriesList: (state, action) => {
      state.seriesList = action.payload;
    },
    getAllSeries: (state, action) => {
      state.allSeries = action.payload;
    },
    toggleSeriesListLoading: (state, action) => {
      state.isSeriesListLoading = action.payload;
    },
    toggleSeriesListError: (state, action) => {
      state.isSeriesListError = action.payload;
    },
    toggleAllSeriesLoading: (state, action) => {
      state.isAllSeriesLoading = action.payload;
    },
    toggleAllSeriesError: (state, action) => {
      state.isAllSeriesError = action.payload;
    },
  },
});

export const seriesActions = seriesList.actions;
export default seriesList;
