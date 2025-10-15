import axios from "axios";
import type { MovieResponse } from "../types/movie";


const fetchMovies = async (search: string, currentPage: number): Promise<MovieResponse> => {
  const BASE_URL = "https://api.themoviedb.org/3/search";
  const ENDPOINT = `/movie`;
  const url = BASE_URL + ENDPOINT;


  const response = await axios.get<MovieResponse>(url, {
    params: {
      query: search,
      include_adult: false,
      page: currentPage,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });
  return response.data;
};
export default fetchMovies;