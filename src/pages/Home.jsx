import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getTrandingMovies = async () => {
      try {
        const resp = await fetchTrendingMovies();
        setTrendingMovies([...resp]);
      } catch (error) {
        console.log(error.message);
      }
    };

    getTrandingMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList movies={trendingMovies} location={location} />
    </main>
  );
};

export default Home;
