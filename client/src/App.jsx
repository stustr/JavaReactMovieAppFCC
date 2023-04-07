import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import api from "./api/axiosConfig";
import Home from "./components/home/Home";
import Reviews from "./components/reviews/Reviews";

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={movies ? <Home movies={movies} /> : <p>Loading...</p>}
      />
      <Route
        path="/Reviews/:movieId"
        element={
          <Reviews
            getMovieData={getMovieData}
            reviews={reviews}
            setReviews={setReviews}
          />
        }
      />
    </Routes>
  );
}

export default App;
