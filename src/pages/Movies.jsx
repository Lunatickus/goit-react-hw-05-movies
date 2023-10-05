import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { fetchSearchedMovies } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const searchMovie = async () => {
      const movieName = searchParams.get('query') ?? '';
      if (movieName === '') return;

      try {
        const resp = await fetchSearchedMovies(movieName);
        setMovies([...resp]);
      } catch (error) {
        console.log(error.message);
      }
    };

    searchMovie();
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    const searchedValue = e.currentTarget.elements.query.value;
    if (searchedValue === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: searchedValue });
    setMovies([]);
    e.currentTarget.reset();
  };

  return (
    <main>
      <SearchBox onSubmit={handleSubmit} />
      {movies.length > 0 && <MovieList movies={movies} location={location} />}
    </main>
  );
};

export default Movies;
