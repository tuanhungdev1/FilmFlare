import { BASE_URL_IMAGE } from "../../constants/apiConstants";
import { Movie } from "../../types/type";
import { IconPlayVideo } from "../icons";

interface MovieSlideProps {
  movieData: Movie;
}

const MovieSlide: React.FC<MovieSlideProps> = ({ movieData }) => {
  console.log(`${BASE_URL_IMAGE}${movieData.backdrop_path}`);
  return (
    <div>
      <img
        src={`${BASE_URL_IMAGE}${movieData.backdrop_path}`}
        alt="poster"
        className="object-cover w-full aspect-video brightness-50"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{movieData.title}</p>
        <div>
          <p className="inline-block p-1 mb-1 text-gray-400 border border-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">{movieData.release_date}</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>{movieData.overview}</p>
          </div>
          <div className="flex gap-2 mt-4">
            <button className="flex items-center px-4 py-2 text-black bg-white rounded item mr- text-10 lg:text-lg">
              <IconPlayVideo /> Trailer
            </button>
            <button className="px-4 py-2 rounded text-10 bg-slate-300/35 lg:text-lg">
              View Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSlide;
