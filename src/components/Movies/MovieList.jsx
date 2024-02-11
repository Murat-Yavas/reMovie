import { useEffect } from "react";
import { fetchMovieList } from "../../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./MovieList.css";

function MovieList() {
  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.movieList.genres);
  const isLoading = useSelector((state) => state.movie.isMovieListLoading);
  const isError = useSelector((state) => state.movie.isMovieListError);

  useEffect(() => {
    fetchMovieList(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="movie-list row">
      {movieList
        ? movieList.map((list) => (
            <NavLink
              key={list.id}
              className="movie-genres col-12  col-md-3 cursor-pointer"
              to={`/movies/${list.name}`}
            >
              {list.name}
            </NavLink>
          ))
        : ""}
    </div>
  );
}

export default MovieList;
