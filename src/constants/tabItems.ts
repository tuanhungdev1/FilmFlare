import { Tab } from "../types/type";
import { ENDPOINTS } from "./apiConstants";

export const TRENDING_TABS: Tab[] = [
  {
    id: "all",
    name: "All",
    url: ENDPOINTS.MOVIES_AND_TV_SHOWS_TRENDING,
  },
  {
    id: "movie",
    name: "Movie",
    url: ENDPOINTS.MOVIES_TRENDING,
  },
  {
    id: "tv",
    name: "TV Show",
    url: ENDPOINTS.TV_SHOWS_TRENDING,
  },
];

export const TOP_RATED_TABS: Tab[] = [
  {
    id: "movie",
    name: "Movie",
    url: ENDPOINTS.MOVIES_TOP_RATED,
  },
  {
    id: "tv",
    name: "TV Show",
    url: ENDPOINTS.TV_SHOWS_TOP_RATED,
  },
];
