import { Cast } from "src/types/type";
import TemplateImage from "../../assets/images/ActorNoImage.svg";

interface ActorInfoProps {
  cast: Cast;
}

const ActorInfo: React.FC<ActorInfoProps> = ({ cast }) => {
  return (
    <div className="bg-black border rounded-lg shadow-sm border-slate-300">
      <img
        className="rounded-lg"
        src={
          cast.profile_path
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face${cast.profile_path}`
            : `${TemplateImage}`
        }
      />
      <div className="p-3">
        <p className="font-bold">{cast.name}</p>
        <p>{cast.character}</p>
      </div>
    </div>
  );
};

export default ActorInfo;
