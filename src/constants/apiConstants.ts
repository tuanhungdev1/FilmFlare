export const BASE_URL = "https://api.themoviedb.org/3";
export const BASE_URL_IMAGE = "https://image.tmdb.org/t/p/original";

export const ENDPOINTS = {
  // POPULAR
  POPULAR_MOVIES: `/movie/popular`,

  // TOP_RATED
  MOVIES_TOP_RATED: `/movie/top_rated`,
  TV_SHOWS_TOP_RATED: `/tv/top_rated`,

  // TRENDING
  MOVIES_AND_TV_SHOWS_TRENDING: `/trending/all/day`,
  MOVIES_TRENDING: `/trending/movie/day`,
  TV_SHOWS_TRENDING: `/trending/tv/day`,

  //MOVIE_DETAIL
  MOVIE_DETAIL: (ID: string) =>
    `/movie/${ID}?append_to_response=release_dates,credits`,

  MOVIES_RECOMMENDATION: (ID: string) => `/movie/${ID}/recommendations`,

  //TV_SHOW_DETAIL
  TV_SHOW_DETAIL: (ID: string) =>
    `/tv/${ID}?append_to_response=content_ratings,aggregate_credits,videos`,

  TV_SHOW_RECOMMENDATION: (ID: string) => `/tv/${ID}/recommendations`,
};
