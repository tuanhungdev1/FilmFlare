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

export interface Genre {
  id: number;
  name: string;
}

interface TVShowCreatedBy {
  id: number;
  credit_id: string;
  name: string;
  original_name: string;
  gender: number;
  profile_path: string;
}

interface Episode {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
}

interface Network {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
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

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface ContentRating {
  descriptors: [];
  iso_3166_1: string;
  rating: string;
}

interface Role {
  credit_id: string;
  character: string;
  episode_count: number;
}

interface CastTVShow {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  roles: Role[];
  total_episode_count: number;
  order: number;
}

interface Job {
  credit_id: string;
  job: string;
  episode_count: number;
}
interface CrewTVShow {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  department: string;
  jobs: Job[];
  total_episode_count: number;
}

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
export interface TVShow {
  adult: boolean;
  backdrop_path: string;
  created_by: TVShowCreatedBy[];
  episode_run_time: [];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: Episode;
  name: string;
  next_episode_to_air: null;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  results: {
    id: number;
    ContentRatings: ContentRating[];
  };

  aggregate_credits: {
    cast: CastTVShow[];
    crew: CrewTVShow[];
    id: number;
  };

  videos: {
    id: number;
    results: Video[];
  };
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
  results: MoviePopular[];
  total_pages: number;
  total_results: number;
}

export interface MovieTrendingList {
  page: number;
  results: Trending[];
  total_pages: number;
  total_results: number;
}

export interface MovieRecommendation extends Movie {}

export interface MovieRecommendationList {
  page: number;
  results: MovieRecommendation[];
  total_pages: number;
  total_results: number;
}

export interface Tab {
  id: string;
  name: string;
  url: string;
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
  origin_country: string[];
}

interface ReleaseDatesForMovie {
  results: ReleaseDate[];
}
