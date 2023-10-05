import axios from 'axios';

const API_KEY = '10897d38417dcf8926a04aa5206da2db';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchSearchedMovies = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1&api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchMovie = async movie_id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieCredits = async movie_id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US&api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieReviews = async movie_id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1&api_key=${API_KEY}`
  );
  return response.data;
};
