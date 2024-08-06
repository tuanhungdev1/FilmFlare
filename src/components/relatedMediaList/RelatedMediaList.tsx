import { Loading } from "@components/loading";
import { MovieCard } from "@components/movieCard";
import { MovieRecommendation } from "src/types/type";

interface RelatedMediaListProps {
  mediaList: MovieRecommendation[];
  isLoading: boolean;
}

const RelatedMediaList: React.FC<RelatedMediaListProps> = ({
  mediaList,
  isLoading,
}) => {
  return (
    <div className="mt-6">
      <p className="mb-4 text-[1.4vw] font-bold text-xl md:text-base lg:text-xl">
        More like this
      </p>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {mediaList.map((media) => (
            <MovieCard
              key={media.id}
              id={media.id}
              title={media.title}
              releaseDate={media.release_date}
              poster={media.poster_path}
              point={media.vote_average}
              mediaType={media.media_type}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RelatedMediaList;
