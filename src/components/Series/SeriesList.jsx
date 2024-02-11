import { useEffect } from "react";
import { fetchSeriesList } from "../../redux/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./SeriesList.css";

function SeriesList() {
  const dispatch = useDispatch();
  const seriesList = useSelector((state) => state.series.seriesList.genres);
  const isLoading = useSelector((state) => state.series.isSeriesListLoading);
  const isError = useSelector((state) => state.series.isSeriesListError);

  useEffect(() => {
    fetchSeriesList(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="series-list row">
      {seriesList
        ? seriesList.map((list) => (
            <NavLink
              key={list.id}
              className="series-genres col-12 col-md-3 cursor-pointer"
              to={`/series/${list.name}`}
            >
              {list.name}
            </NavLink>
          ))
        : ""}
    </div>
  );
}

export default SeriesList;
