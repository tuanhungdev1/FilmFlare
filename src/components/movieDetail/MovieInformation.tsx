import { CurrencyFormatter } from "@utils/CurrencyFormatter";
import React from "react";
import { IMovieDetail } from "src/types/type";

interface MovieInformationProps {
  movieInfo: IMovieDetail;
}

const MovieInformation: React.FC<MovieInformationProps> = ({ movieInfo }) => {
  return (
    <div className="text-xl md:text-base lg:text-xl">
      <p className="mb-4 text-[1.4vw] font-bold text-xl md:text-base lg:text-xl">
        Information
      </p>
      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p>{movieInfo.original_title}</p>
      </div>
      <div className="mb-4">
        <p className="text-xl font-bold md:text-base lg:text-xl">
          Original Country
        </p>
        {(movieInfo.origin_country || []).map((countryCode) => (
          <img
            key={countryCode}
            src={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png`}
            className="mr-1 mt-1 w-[40px]"
          />
        ))}
      </div>
      <div className="mb-4">
        <p className="text-xl font-bold md:text-base lg:text-xl">Status</p>
        <p>{movieInfo.status}</p>
      </div>
      <div className="mb-4">
        <p className="text-xl font-bold md:text-base lg:text-xl">Budget</p>
        <p>{CurrencyFormatter(movieInfo.budget)}</p>
      </div>
      <div className="mb-4">
        <p className="text-xl font-bold md:text-base lg:text-xl">Revenue</p>
        <p>{CurrencyFormatter(movieInfo.revenue)}</p>
      </div>
    </div>
  );
};

export default MovieInformation;
