import { movieActions } from "./movie-slice";
import { seriesActions } from "./series-slice";

export const fetchHomeMovies = async (dispatch) => {
  try {
    dispatch(movieActions.toggleHomeLoading(true));
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjc0OTg5YzI0YWJiZWMzMmU2N2M2MThlYjBmNTYyZSIsInN1YiI6IjY1NGNiODg4NDFhNTYxMzM2OTNjZDcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ONtqRDmH_YMORiS4EyRP1Z6Jl6J2dLzwoSoY3UXqKk8",
      },
    };
    //now playing
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      options
    );
    const result = await response.json();
    dispatch(movieActions.getNowPlaying(result));

    //popular
    const popularResponse = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      options
    );
    const popularResult = await popularResponse.json();
    dispatch(movieActions.getPopular(popularResult));

    //top rated
    const topRatedResponse = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      options
    );
    const topRatedResult = await topRatedResponse.json();
    dispatch(movieActions.getTopRated(topRatedResult));

    dispatch(movieActions.toggleHomeLoading(false));
  } catch (error) {
    dispatch(movieActions.toggleHomeError(true));
  }
};

export const fetchMovieList = async (dispatch) => {
  try {
    dispatch(movieActions.toggleMovieListLoading(true));
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjc0OTg5YzI0YWJiZWMzMmU2N2M2MThlYjBmNTYyZSIsInN1YiI6IjY1NGNiODg4NDFhNTYxMzM2OTNjZDcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ONtqRDmH_YMORiS4EyRP1Z6Jl6J2dLzwoSoY3UXqKk8",
      },
    };
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list",
      options
    );
    const result = await response.json();

    dispatch(movieActions.getMovieList(result));
    dispatch(movieActions.toggleMovieListLoading(false));
  } catch (error) {
    dispatch(movieActions.toggleMovieListError(true));
  }
};

export const loadAllMovies = async (dispatch) => {
  try {
    dispatch(movieActions.toggleAllMoviesLoading(true));
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjc0OTg5YzI0YWJiZWMzMmU2N2M2MThlYjBmNTYyZSIsInN1YiI6IjY1NGNiODg4NDFhNTYxMzM2OTNjZDcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ONtqRDmH_YMORiS4EyRP1Z6Jl6J2dLzwoSoY3UXqKk8",
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      options
    );
    const result = await response.json();

    dispatch(movieActions.getAllMovies(result));
    dispatch(movieActions.toggleAllMoviesLoading(false));
  } catch (error) {
    dispatch(movieActions.toggleAllMoviesError(true));
  }
};

export const fetchSeriesList = async (dispatch) => {
  try {
    dispatch(seriesActions.toggleSeriesListLoading(true));
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjc0OTg5YzI0YWJiZWMzMmU2N2M2MThlYjBmNTYyZSIsInN1YiI6IjY1NGNiODg4NDFhNTYxMzM2OTNjZDcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ONtqRDmH_YMORiS4EyRP1Z6Jl6J2dLzwoSoY3UXqKk8",
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/genre/tv/list",
      options
    );
    const result = await response.json();

    dispatch(seriesActions.getSeriesList(result));
    dispatch(seriesActions.toggleSeriesListLoading(false));
  } catch (error) {
    dispatch(seriesActions.toggleSeriesListError(true));
  }
};

export const loadAllSeries = async (dispatch) => {
  try {
    dispatch(seriesActions.toggleAllSeriesLoading(true));
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMjc0OTg5YzI0YWJiZWMzMmU2N2M2MThlYjBmNTYyZSIsInN1YiI6IjY1NGNiODg4NDFhNTYxMzM2OTNjZDcyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ONtqRDmH_YMORiS4EyRP1Z6Jl6J2dLzwoSoY3UXqKk8",
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/tv/popular",
      options
    );
    const result = await response.json();

    dispatch(seriesActions.getAllSeries(result));
    dispatch(seriesActions.toggleAllSeriesLoading(false));
  } catch (error) {
    dispatch(seriesActions.toggleAllSeriesError(true));
  }
};
