import { useEffect, useState } from "react";
import { Tab, Trending } from "../../types/type";
import { MovieCard } from "../movieCard";

interface MediaListProps {
  title: string;
  tabs: Tab[];
}

const MediaList: React.FC<MediaListProps> = ({ title, tabs }) => {
  const [mediaList, setMediaList] = useState<Trending[]>([]);
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0].id);

  useEffect(() => {
    const URL = tabs.find((tab) => tab.id === activeTabId)?.url;

    if (URL) {
      fetch(URL, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjdiZDc2MzY5NjRlMDNiMWM1OGU4MTM3NDgyNzk4NCIsIm5iZiI6MTcyMDE4ODA4OS43NDAyNzQsInN1YiI6IjY2ODdmYjQ0YzA4NjJhYmVlYWQ0ZGVjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4gCFYDDyvipIesrHjs10NCVvhLG_jdh33R9uXj4VBaI",
        },
      }).then(async (res) => {
        const data = await res.json();
        console.log({ data });
        const trendingMediaList = data.results.slice(0, 12);
        setMediaList(trendingMediaList);
      });
    }
  }, [activeTabId, tabs]);
  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="flex items-center gap-4 mb-6">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex border border-white rounded">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`cursor-pointer rounded px-2 py-1 ${
                tab.id === activeTabId ? "bg-white text-black" : ""
              }`}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:gap-6 sm:grid-cols-4 lg:grid-cols-6">
        {mediaList.map((media) => (
          <MovieCard
          id={media.id}
            key={media.id}
            title={media.title || media.name}
            releaseDate={media.release_date || media.first_air_date}
            poster={media.poster_path}
            point={media.vote_average}
            mediaType={media.media_type || activeTabId}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
