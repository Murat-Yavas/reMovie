import { useEffect } from "react";
import { fetchHomeMovies } from "../../redux/apiCall";
import HomeItemNowPlaying from "./HomeItemNowPlaying";
import HomeItemPopular from "./HomeItemPopular";
import HomeItemTopRated from "./HomeItemTopRated";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const loadingState = useSelector((state) => state.movie.isHomeLoading);
  const errorState = useSelector((state) => state.movie.isHomeError);

  useEffect(() => {
    fetchHomeMovies(dispatch);
  }, [dispatch]);

  if (loadingState) {
    return <p>Loading...</p>;
  }

  if (errorState) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <HomeItemNowPlaying />
      <HomeItemPopular />
      <HomeItemTopRated />
    </>
  );
}

export default Home;
