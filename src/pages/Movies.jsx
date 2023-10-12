import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { fetchSearchedMovies } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) return;
    const searchMovie = async () => {
      try {
        const resp = await fetchSearchedMovies(query);
        setMovies([...resp]);
      } catch (error) {
        console.log(error.message);
      }
    };

    searchMovie();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const searchedValue = e.currentTarget.elements.query.value;

    setSearchParams({ query: searchedValue });
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
