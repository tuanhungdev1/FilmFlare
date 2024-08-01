import React, { useEffect, useState } from "react";
import { Movie } from "../../types/type";
import { SlideDot } from "../common";

interface DotsNavigationProps {
  movies: Movie[];
  currentSlide: number;
  onCLick: (index: number) => void;
}

const DotsNavigation: React.FC<DotsNavigationProps> = ({
  movies,
  currentSlide,
  onCLick,
}) => {
  const [numberSlide, setNumberSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumberSlide((prev) => (prev + 1) % movies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies.length]);

  useEffect(() => {
    if (movies[numberSlide]) {
      onCLick(movies[numberSlide].id);
    }
  }, [numberSlide, onCLick, movies]);

  const handleDotClick = (index: number) => {
    setNumberSlide(index);
    onCLick(movies[index].id);
  };

  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex gap-1">
        {movies.map((movie) => (
          <SlideDot
            key={movie.id}
            isActive={currentSlide === movie.id}
            onClick={() => handleDotClick(movie.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default DotsNavigation;
