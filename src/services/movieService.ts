import axios from 'axios';
import type { MovieResponse } from '../types/movie';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export const fetchMovies = async (
  query: string,
  page: number = 1,
  useToken: boolean = false
): Promise<MovieResponse> => {
  const config = {
    params: { query, page },
    ...(useToken
      ? {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      : {
          params: {
            query,
            page,
            api_key: API_KEY,
          },
        }),
  };

  const response = await axios.get(BASE_URL, config);
  return response.data;
};