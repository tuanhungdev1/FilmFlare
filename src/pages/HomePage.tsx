import { FeatureMovies } from "@components/featureMovies";
import { MediaList } from "@components/mediaList";
import { TOP_RATED_TABS, TRENDING_TABS } from "@constants/tabItems";

const HomePage = () => {
  return (
    <div>
      <FeatureMovies />
      <MediaList title="Trendings" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
    </div>
  );
};

export default HomePage;
