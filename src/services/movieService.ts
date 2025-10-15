import axios from "axios";
import type { Movie } from "../types/movie";

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const fetchMovies = async (search: string, currentPage: number): Promise<MovieResponse> => {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const url = "https://api.themoviedb.org/3/search/movie";

  const response = await axios.get<MovieResponse>(url, {
    params: {
      query: search,
      include_adult: false,
      page: currentPage,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export default fetchMovies;