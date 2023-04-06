import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import api from "./api/axiosConfig";
import Layout from "./components/Layout";
import Home from "./components/home/Home";

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={movies ? <Home movies={movies} /> : <p>Loading...</p>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
