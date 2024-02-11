import CardUI from "../UI/Card/CardUI";
import Button from "../UI/Button/ButtonUI";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllSeries } from "../../redux/apiCall";
import { userActions } from "../../redux/user-slice";

function SeriesGenreDetail() {
  const dispatch = useDispatch();
  const allSeries = useSelector((state) => state.series.allSeries.results);
  const isLoading = useSelector((state) => state.series.isAllSeriesLoading);
  const isError = useSelector((state) => state.series.isAllSeriesError);

  useEffect(() => {
    loadAllSeries(dispatch);
  }, [dispatch]);

  const addToList = (series) => {
    dispatch(userActions.addItemToWatchList(series));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className="container">
      <div className="row">
        {allSeries
          ? allSeries.map((series) => (
              <CardUI
                item={series}
                btnText="Add To Watch List"
                onClick={() => addToList(series)}
                key={series.id}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default SeriesGenreDetail;
