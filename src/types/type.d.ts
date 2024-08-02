export interface IMenuItem {
  title: string;
  link: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  video: boolean;
  media_type: string;
  vote_average: number;
  vote_count: number;
}

export interface MoviePopular extends Movie {}

export interface Trending extends Movie {
  original_language: string;
  media_type: string;
  name?: string;
  first_air_date?: string;
}

export interface MovieList {
  page: number;
  result: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Tab {
  id: string;
  name: string;
  url: string;
}
