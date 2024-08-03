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

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Cast {
  adult: boolean;
  cast_id: 7;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: 0;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface Crew {
  adult: boolean;
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface Credit {
  cast: Cast[];
  crew: Crew[];
}

interface ReleaseDateDetail {
  certification: string;
  descriptors: [];
  iso_639_1: string;
  note: string;
  release_date: string;
  type: number;
}

export interface ReleaseDate {
  iso_3166_1: string;
  release_dates: ReleaseDateDetail[];
}
export interface IMovieDetail extends Movie {
  belongs_to_collection: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  original_language: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  credits: Credit;
  release_dates: ReleaseDatesForMovie;
}

interface ReleaseDatesForMovie {
  results: ReleaseDate[];
}
