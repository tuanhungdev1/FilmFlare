import { CircularProgressBarIcon } from "@components/icons";

import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { groupBy } from "lodash";
import React from "react";
import { ColorCircularProgress } from "../../types/enums";
import { IMovieDetail } from "src/types/type";

interface BannerProps {
  mediaInfo: IMovieDetail | null;
}

const Banner: React.FC<BannerProps> = ({ mediaInfo }) => {
  const certification = (mediaInfo?.release_dates.results || [])
    .find((result) => result.iso_3166_1 === "US")
    ?.release_dates.find(
      (releaseDate) => releaseDate.certification
    )?.certification;

  const crews = mediaInfo?.credits.crew
    ?.filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({
      id: crew.id,
      job: crew.job,
      name: crew.name,
    }));

  const groupedCrews = groupBy(crews, "job");

  console.log({ crews, groupedCrews });
  return (
    <div className="relative overflow-hidden text-white">
      <img
        className="absolute inset-0 brightness-[.2]"
        src={`https://image.tmdb.org/t/p/original${mediaInfo?.backdrop_path}`}
      />
      <div className="relative flex max-w-screen-xl gap-6 px-6 py-10 mx-auto lg:gap-8">
        <div className="flex-1">
          <img
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${mediaInfo?.poster_path}`}
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{mediaInfo?.title}</p>
          <div className="flex items-center gap-4">
            <span className="p-1 text-gray-400 border border-gray-400">
              {certification}
            </span>
            <p>{mediaInfo?.release_date}</p>
            <p>
              {(mediaInfo?.genres || []).map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <CircularProgressBarIcon
                percent={Math.round((mediaInfo?.vote_average || 0) * 10)}
                size={3.5}
                strokeWidth={0.3}
                strokeColor={
                  (mediaInfo?.vote_average || 0) >= 7
                    ? ColorCircularProgress.GREEN
                    : (mediaInfo?.vote_average || 0) >= 5
                    ? ColorCircularProgress.ORANGE
                    : ColorCircularProgress.GREEN
                }
              />{" "}
              Rating
            </div>
            <button>
              <FontAwesomeIcon icon={faPlay} className="mr-1" />
              Trailer
            </button>
          </div>
          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p className="hidden text-sm md:block md:text-sm lg:text-xl">
              {mediaInfo?.overview}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {Object.keys(groupedCrews).map((job) => (
              <div key={job}>
                <p className="font-bold">{job}</p>
                <p className="text-sm lg:text-xl">
                  {groupedCrews[job].map((crew) => crew.name).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
