import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/axiosConfig.js";
import ReviewForm from "../reviewForm/ReviewForm.jsx";

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
    <>
      {movie ? (
        <>
          <h3 className="font-bold ">{movie.title}</h3>
          <ReviewForm handleSubmit={addReview} revText={revText}/>
          <p>Reviews:</p>
          {reviews.map((review) => {
            return <p key={review.id}>{review.body}</p>;
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Reviews;
