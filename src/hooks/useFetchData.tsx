import { AxiosError, AxiosResponse } from "axios";
import { DependencyList, useEffect, useState } from "react";

interface UseFetchDataResult<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
}

const useFetchData = <T,>(
  apiCall: () => Promise<AxiosResponse<T>>,
  dependencies: DependencyList = []
): UseFetchDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiCall();
        setData(result.data);
        console.log(result.data);
      } catch (err) {
        setError(err as AxiosError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(apiCall), ...dependencies]);

  return { data, loading, error };
};

export default useFetchData;
