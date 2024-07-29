import { ENDPOINTS } from "../constants/apiConstants";
import { MovieList } from "../types/type";
import axiosInstance from "./axiosConfig";

export const movieService = {
  getPopularMovie: () => axiosInstance.get<MovieList>(ENDPOINTS.POPULAR_MOVIES),
};
