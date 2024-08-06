import { Loading } from "@components/loading";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import { ActorList } from "@components/actorList";
import { RelatedMediaList } from "@components/relatedMediaList";
import { IMovieDetail, MovieRecommendationList } from "src/types/type";
import useFetchData from "@hooks/useFetchData";
import axiosInstance from "@api/axiosConfig";
import { ENDPOINTS } from "@constants/apiConstants";
import MovieInformation from "./MovieInformation";

const MovieDetail = () => {
  const { id } = useParams<string>();

  const { data: movieInfo, loading } = useFetchData<IMovieDetail>(
    () => axiosInstance.get(ENDPOINTS.MOVIE_DETAIL(id!)),
    [id]
  );

  const { data: recommandationsResponse, loading: isRelatedMoviesLoading } =
    useFetchData<MovieRecommendationList>(
      () => axiosInstance.get(ENDPOINTS.MOVIES_RECOMMENDATION(id!)),
      [id]
    );

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-white text-[1.2vw]">
        <div className="flex flex-col-reverse max-w-screen-xl gap-6 px-6 py-10 mx-auto md:flex-row">
          <div className="flex-[2]">
            <ActorList actors={movieInfo?.credits.cast || []} />
            <RelatedMediaList
              mediaList={recommandationsResponse?.results || []}
              isLoading={isRelatedMoviesLoading}
            />
          </div>
          <div className="flex-1">
            <MovieInformation movieInfo={movieInfo!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
