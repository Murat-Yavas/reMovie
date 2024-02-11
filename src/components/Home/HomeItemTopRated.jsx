import { useEffect, useState } from "react";
import "./HomeItemTopRated.css";

import { useSelector } from "react-redux";

function HomeItemTopRated() {
  const topRatedMovies = useSelector(
    (state) => state.movie.topRatedMovies.results
  );

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="top-rated">
      <h3 className="list-title">Top Rated</h3>
      {topRatedMovies ? (
        <swiper-container
          class="mySwiper"
          pagination="true"
          pagination-clickable="true"
          space-between="20"
          slides-per-view={dimensions.width < 768 ? "1" : "5"}
        >
          {topRatedMovies?.map((movie) => (
            <swiper-slide key={movie.id}>
              <div className="mb-5">
                {
                  <img
                    className="top-rated-image"
                    src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  />
                }
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      ) : (
        ""
      )}
    </div>
  );
}

export default HomeItemTopRated;
