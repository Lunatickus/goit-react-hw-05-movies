import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import { StyledCastImg } from './MovieCast.styled';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

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
      {cast.length > 0 && (
        <ul>
          {cast.map(({ id, name, profile_path, character }) => {
            return (
              <li key={id}>
                <StyledCastImg src={IMAGE_URL + profile_path} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
