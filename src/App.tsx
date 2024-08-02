import { FeatureMovies } from "./components/featureMovies";
import { MediaList } from "./components/mediaList";
import { TOP_RATED_TABS, TRENDING_TABS } from "./constants/tabItems";
import { Header } from "./layout";

const App = () => {
  return (
    <>
      <Header />
      <FeatureMovies />
      <MediaList title="Trendings" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOP_RATED_TABS} />
    </>
  );
};

export default App;
