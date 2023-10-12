import { MovieReviewsList } from 'components/MovieReviewsList/MovieReviewsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [noReviewsMessage, setNoReviewsMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovieReviews = async () => {
      setIsLoading(true);
      try {
        const resp = await fetchMovieReviews(movieId);
        setReviews(resp.results);

        if (resp.results.length === 0) {
          setNoReviewsMessage(true);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <>
      {noReviewsMessage && <p>We don't have any reviews for this movie.</p>}
      {isLoading && <div>Loading...</div>}
      {reviews.length > 0 && <MovieReviewsList reviews={reviews} />}
    </>
  );
};

export default MovieReviews;
