import { Loading } from "@components/loading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "./Banner";

const MovieDetail = () => {
  const { id } = useParams<string>();
  const [movieInfo, setMovieInfo] = useState(null);
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
      {/* <ActorList /> */}
    </div>
  );
};

export default MovieDetail;
