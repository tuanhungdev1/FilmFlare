import axiosInstance from "@api/axiosConfig";
import { Loading } from "@components/loading";
import { ENDPOINTS } from "@constants/apiConstants";
import useFetchData from "@hooks/useFetchData";
import { useParams } from "react-router-dom";
import { TVShow } from "src/types/type";

const TVShowDetail = () => {
  const { id } = useParams<string>();

  const { data: movieInfo, loading } = useFetchData<TVShow>(
    () => axiosInstance.get(ENDPOINTS.TV_SHOW_DETAIL(id!)),
    [id]
  );

  if (loading) {
    return <Loading />;
  }

  console.log(movieInfo);

  return <div>TV SHOW DETAIL</div>;
};

export default TVShowDetail;
