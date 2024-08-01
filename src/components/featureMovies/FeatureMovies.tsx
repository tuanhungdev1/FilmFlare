import { useEffect, useState } from "react";
import DotsNavigation from "./DotsNavigation";
import MovieSlide from "./MovieSlide";
import { Movie } from "../../types/type";

const FeatureMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [activeMovieId, setActiveMovieId] = useState<number>(0);

  const handleSetActiveMovie = (id: number) => {
    setActiveMovieId(id);
  };

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjdiZDc2MzY5NjRlMDNiMWM1OGU4MTM3NDgyNzk4NCIsIm5iZiI6MTcyMDE4ODA4OS43NDAyNzQsInN1YiI6IjY2ODdmYjQ0YzA4NjJhYmVlYWQ0ZGVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4gCFYDDyvipIesrHjs10NCVvhLG_jdh33R9uXj4VBaI",
      },
    }).then(async (res) => {
      const data = await res.json();
      const popularMovies = data.results.slice(0, 4);
      setMovies(popularMovies);
      setActiveMovieId(popularMovies[0].id);
    });
  }, []);
  console.log(activeMovieId);
  console.log(movies);

  return (
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id == activeMovieId)
        .map((movie) => (
          <MovieSlide key={movie.id} movieData={movie} />
        ))}
      <DotsNavigation
        movies={movies}
        currentSlide={activeMovieId}
        onCLick={handleSetActiveMovie}
      />
    </div>
  );
};

export default FeatureMovies;
