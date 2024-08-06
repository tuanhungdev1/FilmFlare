import { useEffect, useState } from "react";
import DotsNavigation from "./DotsNavigation";
import MovieSlide from "./MovieSlide";
import { MovieList, MoviePopular } from "../../types/type";
import { ENDPOINTS } from "../../constants/apiConstants";
import useFetchData from "@hooks/useFetchData";
import axiosInstance from "@api/axiosConfig";

const FeatureMovies = () => {
  const [movies, setMovies] = useState<MoviePopular[]>([]);
  const [activeMovieId, setActiveMovieId] = useState<number>(0);

  const handleSetActiveMovie = (id: number) => {
    setActiveMovieId(id);
  };

  const { data: moviesResponse } = useFetchData<MovieList>(
    () => axiosInstance.get<MovieList>(ENDPOINTS.POPULAR_MOVIES),
    []
  );

  useEffect(() => {
    if (moviesResponse) {
      const popularMovies = moviesResponse.results.slice(0, 4);
      setMovies(popularMovies);
      setActiveMovieId(popularMovies[0].id);
    }
  }, [moviesResponse]);

  return (
    <div className="relative text-white">
      {movies.length > 0 &&
        movies
          .filter((movie) => movie.id == activeMovieId)
          .map((movie) => <MovieSlide key={movie.id} movieData={movie} />)}
      <DotsNavigation
        movies={movies}
        currentSlide={activeMovieId}
        onCLick={handleSetActiveMovie}
      />
    </div>
  );
};

export default FeatureMovies;
