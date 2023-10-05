import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovie } from 'services/api';
import {
  Wrapper,
  StyledImg,
  InformWrapper,
  StyledGenres,
} from './MovieDetails.styled';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backlinkLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovie = async () => {
      try {
        const resp = await fetchMovie(id);
        setMovie(resp);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovie();
  }, [id]);

  return (
    <main>
      {movie && (
        <>
          <Link to={backlinkLocation.current}>Go back</Link>
          <Wrapper>
            <StyledImg src={IMAGE_URL + movie.poster_path} alt={movie.title} />
            <div>
              <h2>{movie.title}</h2>
              <p>User Score {Math.round(movie.vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <StyledGenres>
                {movie.genres.map(({ id, name }) => {
                  return <li key={id}>{name}</li>;
                })}
              </StyledGenres>
            </div>
          </Wrapper>
          <InformWrapper>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
          </InformWrapper>
        </>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
