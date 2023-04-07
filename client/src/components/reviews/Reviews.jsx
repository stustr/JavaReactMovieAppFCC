import { useRef } from "react";
import api from "../../api/axiosConfig.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const revText = useRef();
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();

    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });

      const updatedReviews = [...reviews, { body: rev.value }];
      rev.value = "";
      setReviews(updatedReviews);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <table className="table-auto">
      <tr>
        <th>
          <h3>Reviews</h3>
        </th>
      </tr>
      <tr>
        <th>
          <img src={movie?.poster} alt="" />
        </th>
        <th>
          {
            <>
              <tr>
                <th>
                  <ReviewForm
                    handleSubmit={addReview}
                    revText={revText}
                    labelText="Write a review?"
                  ></ReviewForm>
                </th>
              </tr>
              <tr>
                <th>
                  <hr />
                </th>
              </tr>
            </>
          }
          {reviews?.map((r) => {
            return (
              <>
                <tr>
                  <th>{r.body}</th>
                </tr>
                <tr>
                  <th>
                    <hr />
                  </th>
                </tr>
              </>
            );
          })}
        </th>
      </tr>
    </table>
  );
};
export default Reviews;
