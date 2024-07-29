import { IconPlayVideo } from "../icons";

const MovieSlide = () => {
  return (
    <div>
      <img
        src="https://image.tmdb.org/t/p/original/xg27NrXi7VXCGUr7MG75UqLl6Vg.jpg"
        alt="poster"
        className="aspect-video brightness-50"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">Inside Out 2</p>
        <div>
          <p className="inline-block p-1 mb-1 text-gray-400 border border-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">2024-06-11</p>
        </div>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            <p className="mb-2 font-bold">Overview</p>
            <p>
              Teenager Riley&apos;s mind headquarters is undergoing a sudden
              demolition to make room for something entirely unexpected: new
              Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been
              running a successful operation by all accounts, aren’t sure how to
              feel when Anxiety shows up. And it looks like she’s not alone.
            </p>
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
