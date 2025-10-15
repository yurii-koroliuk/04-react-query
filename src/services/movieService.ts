import axios from 'axios';
import type { Movie } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const config = {
    params: { query },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(BASE_URL, config);
  return response.data.results;
};