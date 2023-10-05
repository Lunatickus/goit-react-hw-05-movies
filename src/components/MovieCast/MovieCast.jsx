import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import { MovieCastList } from 'components/MovieCastList/MovieCastList';

const MovieCast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovieCast = async () => {
      setIsLoading(true);
      try {
        const resp = await fetchMovieCredits(id);
        setCast(resp.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieCast();
  }, [id]);
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {cast.length > 0 && <MovieCastList cast={cast} />}
    </>
  );
};

export default MovieCast;
