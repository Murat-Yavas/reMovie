import "./HomeItemNowPlaying.css";
import { useSelector } from "react-redux";
import { FaImdb } from "react-icons/fa6";

function HomeItemNowPlaying() {
  const { nowPlayingMovies } = useSelector((state) => state.movie);

  const mainMovie = nowPlayingMovies?.results?.[0];
  const sideMovie1 = nowPlayingMovies?.results?.[1];
  const sideMovie2 = nowPlayingMovies?.results?.[2];

  return (
    <div className="now-playing row">
      {nowPlayingMovies?.results?.length > 0 ? (
        <>
          <div className="main-movie col-12 col-md-8">
            <div
              style={{
                backgroundImage: `url(http://image.tmdb.org/t/p/original${mainMovie.backdrop_path})`,
              }}
              className="main-movie-img"
            >
              <div className="position-absolute overflow-hidden w-100 text-center movie-info">
                <h2>{mainMovie.title}</h2>
                <div className="d-flex align-items-center justify-content-center ">
                  <FaImdb size={28} />
                  <h3 className="overflow-hidden ms-2 mb-0">
                    {mainMovie.vote_average.toFixed(1)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="side-movies d-none d-md-block col-4">
            <div
              style={{
                backgroundImage: `url(http://image.tmdb.org/t/p/original${sideMovie1.backdrop_path})`,
              }}
              className="side-image"
            >
              <div className="position-absolute overflow-hidden w-100 text-center movie-info">
                <h2>{sideMovie1.title}</h2>
                <div className="d-flex align-items-center justify-content-center ">
                  <FaImdb size={28} />
                  <h3 className="overflow-hidden ms-2 mb-0">
                    {sideMovie1.vote_average.toFixed(1)}
                  </h3>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundImage: `url(http://image.tmdb.org/t/p/original${sideMovie2.backdrop_path})`,
              }}
              className="side-image"
            >
              <div className="position-absolute overflow-hidden w-100 text-center movie-info">
                <h2>{sideMovie2.title}</h2>
                <div className="d-flex align-items-center justify-content-center ">
                  <FaImdb size={28} />
                  <h3 className="overflow-hidden ms-2 mb-0">
                    {sideMovie2.vote_average.toFixed(1)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default HomeItemNowPlaying;
