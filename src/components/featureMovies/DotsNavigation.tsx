import { SlideDot } from "../common";

interface DotsNavigationProps {
  totalSlides: number;
  currentSlide: number;
  onCLick: (index: number) => void;
}

const DotsNavigation: React.FC<DotsNavigationProps> = ({
  totalSlides,
  currentSlide,
  onCLick,
}) => {
  return (
    <div className="absolute bottom-[10%] right-8">
      <ul className="flex gap-1">
        {Array.from({ length: totalSlides }, (_, index) => (
          <SlideDot
            key={index}
            isActive={currentSlide === index}
            onClick={() => onCLick(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default DotsNavigation;
