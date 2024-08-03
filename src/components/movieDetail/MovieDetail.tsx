import { Loading } from "@components/loading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";
import { ActorList } from "@components/actorList";
import { RelatedMediaList } from "@components/relatedMediaList";
import { IMovieDetail } from "src/types/type";

const MovieDetail = () => {
  const { id } = useParams<string>();
  const [movieInfo, setMovieInfo] = useState<IMovieDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjdiZDc2MzY5NjRlMDNiMWM1OGU4MTM3NDgyNzk4NCIsIm5iZiI6MTcyMDE4ODA4OS43NDAyNzQsInN1YiI6IjY2ODdmYjQ0YzA4NjJhYmVlYWQ0ZGVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4gCFYDDyvipIesrHjs10NCVvhLG_jdh33R9uXj4VBaI",
        },
      }
    )
      .then(async (res) => {
        const data = await res.json();
        console.log({ data });
        setMovieInfo(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  console.log(movieInfo);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieInfo} />
      <div className="bg-black text-white text-[1.2vw]">
        <div className="flex max-w-screen-xl gap-6 px-6 py-10 mx-auto">
          <div className="flex-[2]">
            <ActorList actors={movieInfo?.credits.cast || []} />
            <RelatedMediaList />
          </div>
          <div className="flex-1">
            <p className="mb-4 text-[1.4vw] font-bold">Information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
