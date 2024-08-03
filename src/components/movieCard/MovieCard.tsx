import React from "react";
import { CircularProgressBarIcon } from "../icons";
import { ColorCircularProgress } from "../../types/enums";

interface MovieCardProps {
  title?: string;
  releaseDate?: string;
  poster: string;
  point: number;
  mediaType: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  mediaType,
  point,
  poster,
  releaseDate,
}) => {
  return (
    <div className="relative border rounded-lg border-slate-800">
      {mediaType === "tv" && (
        <p className="absolute p-1 text-sm text-white bg-black rounded shadow-md right-1 top-1">
          TV Show
        </p>
      )}
      <img
        className="rounded-lg"
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
        <p className="mt-2 font-bold">{title}</p>
        <p className="text-slate-300">{releaseDate}</p>
      </div>
    </div>
  );
};

export default MovieCard;
