import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovie } from 'services/api';
import { MovieDetailsInfo } from 'components/MoviDetailsInfo/MoviDetailsInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backlinkLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    
    const getMovie = async () => {
      try {
        const resp = await fetchMovie(movieId);
        setMovie(resp);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <main>
      {movie && (
        <>
          <Link to={backlinkLocation.current}>Go back</Link>
          <MovieDetailsInfo
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
            overview={movie.overview}
            genres={movie.genres}
          />
        </>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
