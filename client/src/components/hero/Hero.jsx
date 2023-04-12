import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Hero = ({ movies }) => {
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <div>
      <Carousel>
        {movies.map((movie) => {
          return (
            <Paper key={movie.id}>
              <div>
                <div>
                  <img src={movie.poster} alt="" />
                </div>
                <div>
                  <h4>{movie.title} </h4>
                </div>
                <button
                  className="flex justify-end bg-slate-500 p-3 rounded-md"
                  onClick={() => reviews(movie.imdbId)}
                >
                  Reviews
                </button>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Hero;
