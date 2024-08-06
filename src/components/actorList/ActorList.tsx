import { ActorInfo } from "@components/actorInfo";
import { useState } from "react";
import { Cast } from "src/types/type";

interface ActorListProps {
  actors: Cast[];
}

const ActorList: React.FC<ActorListProps> = ({ actors }) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  const currentActors = isShowMore ? actors.slice(0, 32) : actors.slice(0, 4);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold text-xl md:text-base lg:text-xl">
        Actors
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {currentActors.map((actor) => (
          <ActorInfo key={actor.id} cast={actor} />
        ))}
      </div>
      <p
        className="mt-1 cursor-pointer"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

export default ActorList;
