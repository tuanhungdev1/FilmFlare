import { useState } from "react";
import DotsNavigation from "./DotsNavigation";
import MovieSlide from "./MovieSlide";

const FeatureMovies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 4;

  const handleNavigateToSlideClick = (index: number) => {
    setCurrentSlide(index);
  };
  return (
    <div className="relative text-white">
      <MovieSlide />
      <DotsNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onCLick={handleNavigateToSlideClick}
      />
    </div>
  );
};

export default FeatureMovies;
