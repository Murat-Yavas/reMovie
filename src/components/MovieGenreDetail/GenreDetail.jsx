import "./GenreDetail.css";
import Button from "../UI/Button/ButtonUI";
import CardUI from "../UI/Card/CardUI";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllMovies } from "../../redux/apiCall";
import { userActions } from "../../redux/user-slice";

function GenreDetail() {
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.movie.allMovies.results);
  const isLoading = useSelector((state) => state.movie.isAllMoviesLoading);
  const isError = useSelector((state) => state.movie.isAllMoviesError);

  useEffect(() => {
    loadAllMovies(dispatch);
  }, [dispatch]);

  const addToList = (movie) => {
    dispatch(userActions.addItemToWatchList(movie));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="container">
      <div className="row card-list">
        {allMovies
          ? allMovies.map((movie) => (
              <CardUI
                item={movie}
                btnText="Add To Watch List"
                onClick={() => addToList(movie)}
                key={movie.id}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default GenreDetail;
