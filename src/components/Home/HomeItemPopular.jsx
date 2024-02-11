import { useEffect, useState } from "react";
import "./HomeItemPopular.css";

import { useSelector } from "react-redux";

function HomeItemPopular() {
  const popularMovies = useSelector(
    (state) => state.movie.popularMovies.results
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
    <div className="popular">
      <h3 className="list-title">Trend</h3>

      {popularMovies ? (
        <swiper-container
          className="mySwiper"
          pagination="true"
          pagination-clickable="true"
          space-between="20"
          slides-per-view={dimensions.width < 768 ? "1" : "5"}
        >
          {popularMovies?.map((movie) => (
            <swiper-slide key={movie.id}>
              <div className="mb-5">
                {
                  <img
                    className="popular-image"
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

export default HomeItemPopular;
