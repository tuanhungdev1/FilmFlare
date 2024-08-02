export const BASE_URL = "https://api.themoviedb.org/3";
export const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";

export const ENDPOINTS = {
  // POPULAR
  POPULAR_MOVIES: `${BASE_URL}/movie/popular`,

  // TOP_RATED
  MOVIES_TOP_RATED: `${BASE_URL}/movie/top_rated`,
  TV_SHOWS_TOP_RATED: `${BASE_URL}/tv/top_rated`,

  // TRENDING
  MOVIES_AND_TV_SHOWS_TRENDING: `${BASE_URL}/trending/all/day`,
  MOVIES_TRENDING: `${BASE_URL}/trending/movie/day`,
  TV_SHOWS_TRENDING: `${BASE_URL}/trending/tv/day`,
};
