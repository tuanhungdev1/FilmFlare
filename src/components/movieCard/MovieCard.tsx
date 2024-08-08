import React from "react";
import { CircularProgressBarIcon } from "../icons";
import { ColorCircularProgress } from "../../types/enums";
import { Link } from "react-router-dom";
import { ImageComponent } from "@components/image";

interface MovieCardProps {
  id: number;
  title?: string;
  releaseDate?: string;
  poster: string;
  point: number;
  mediaType: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  mediaType,
  point,
  poster,
  releaseDate,
}) => {
  return (
    <Link
      to={`${mediaType === "tv" ? `/tvshow/${id}` : `/movie/${id}`}`}
      className="border rounded-lg border-slate-800"
    >
      <div className="relative text-sm md:text-sm lg:text-xl">
        {mediaType === "tv" && (
          <p className="absolute p-1 text-sm text-white bg-black rounded shadow-md right-1 top-1">
            TV Show
          </p>
        )}
        <ImageComponent
          width={210}
          height={300}
          className="w-full rounded-lg"
          src={`https://image.tmdb.org/t/p/w500${poster}`}
        />
        <div className="relative -top-[1.5vw] px-4">
          <CircularProgressBarIcon
            size={3}
            strokeWidth={0.25}
            percent={Math.round(point * 10)}
            strokeColor={
              point >= 7
                ? ColorCircularProgress.GREEN
                : point >= 5
                ? ColorCircularProgress.ORANGE
                : ColorCircularProgress.GREEN
            }
          />
          <p className="mt-2 text-base font-bold lg:text-xl">{title}</p>
          <p className="text-slate-300">{releaseDate}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
