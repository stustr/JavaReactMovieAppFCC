import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

const Hero = ({ movies }) => {
  return (
    <div>
      <Carousel>
        {movies.map((movie) => {
          return (
            <Paper>
              <div>
                <div>
                  <div>
                    <div>
                      <img src={movie.poster} alt="" />
                    </div>
                    <div>
                      <h4>{movie.title} </h4>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Hero;
