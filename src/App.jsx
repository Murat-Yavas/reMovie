// import "./App.css";
import { register } from "swiper/element/bundle";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import MovieGenreDetail from "./pages/MovieGenreDetail";
import LogInPage from "./pages/LogIn";
import WatchListPage from "./pages/WatchList";
import SeriesGenreDetailPage from "./pages/SeriesGenreDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/logIn",
        element: <LogInPage />,
      },
      {
        path: "/watchList",
        element: <WatchListPage />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/:genre",
        element: <MovieGenreDetail />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/series/:genre",
        element: <SeriesGenreDetailPage />,
      },
    ],
  },
]);

function App() {
  register();
  return <RouterProvider router={router} />;
}

export default App;
